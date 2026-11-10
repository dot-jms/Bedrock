/* Shared helpers: access gate state and the pixel "bedrock" texture. */
(function () {
  const KEY = 'bedrock_access_v2';

  window.Bedrock = {
    hasAccess() {
      try { return localStorage.getItem(KEY) === 'granted'; } catch (_) { return false; }
    },
    grant() { try { localStorage.setItem(KEY, 'granted'); } catch (_) {} },
    revoke() { try { localStorage.removeItem(KEY); } catch (_) {} },

    // Seeded RNG so each texture is stable between visits.
    rng(seed) {
      let h = 1779033703 ^ seed.length;
      for (let i = 0; i < seed.length; i++) {
        h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
        h = (h << 13) | (h >>> 19);
      }
      return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        h ^= h >>> 16;
        return (h >>> 0) / 4294967296;
      };
    },

    // Mottled pixel-block texture. tint: [r,g,b] gray base shifted toward a color.
    paint(canvas, seed, opts) {
      opts = opts || {};
      const cell = opts.cell || 6;
      const tint = opts.tint || [0, 0, 0];
      const rand = this.rng(seed);
      const w = canvas.clientWidth || canvas.width;
      const h = canvas.clientHeight || canvas.height;
      const dpr = 1;
      canvas.width = Math.ceil(w / cell);
      canvas.height = Math.ceil(h / cell);
      const ctx = canvas.getContext('2d');
      const cols = canvas.width, rows = canvas.height;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Chunky clumps: blend a coarse noise with per-pixel noise.
          const clump = this.rng(seed + ':' + (x >> 1) + ':' + (y >> 1))();
          let v = 0.55 * clump + 0.45 * rand();
          let g = 22 + Math.floor(v * 58);
          if (v > 0.9) g = 8;           // dark specks
          if (v < 0.07) g = 96;         // light flecks
          const r = Math.min(255, g + tint[0]);
          const gr = Math.min(255, g + tint[1]);
          const b = Math.min(255, g + tint[2]);
          ctx.fillStyle = 'rgb(' + r + ',' + gr + ',' + b + ')';
          ctx.fillRect(x, y, 1, 1);
        }
      }
      canvas.style.imageRendering = 'pixelated';
    }
  };
})();
