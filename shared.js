/* Access state and the animated space background. */
(function () {
  const KEY = 'bedrock_access_v2';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function space(canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, stars = [], blobs = [];
    const rand = (a, b) => Math.random() * (b - a) + a;

    function size() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(260, Math.floor((W * H) / 6500));
      stars = Array.from({ length: n }, () => {
        const roll = Math.random();
        return {
          x: rand(0, W), y: rand(0, H), z: rand(0.25, 1), r: rand(0.4, 1.5),
          vx: rand(-0.02, 0.02), vy: rand(-0.04, 0.04), p: rand(0, 6.28), s: rand(0.4, 1.4),
          c: roll > 0.93 ? '142,246,193' : roll > 0.87 ? '190,150,255' : '255,255,255'
        };
      });
      blobs = Array.from({ length: 5 }, (_, i) => ({
        x: rand(0, W), y: rand(0, H), r: rand(160, 320), vx: rand(-0.06, 0.06), vy: rand(-0.04, 0.04),
        c: i % 2 ? '150,85,255' : '142,246,193', a: rand(0.035, 0.07)
      }));
    }

    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      for (const b of blobs) {
        if (!reduce) { b.x += b.vx; b.y += b.vy; }
        if (b.x < -b.r) b.x = W + b.r; if (b.x > W + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = H + b.r; if (b.y > H + b.r) b.y = -b.r;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, 'rgba(' + b.c + ',' + b.a + ')');
        g.addColorStop(1, 'rgba(' + b.c + ',0)');
        ctx.fillStyle = g; ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
      }
      const sec = t / 1000;
      for (const s of stars) {
        if (!reduce) {
          s.x += s.vx * s.z; s.y += s.vy * s.z;
          if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
          if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
        }
        const tw = reduce ? 0.7 : 0.55 + 0.45 * Math.sin(sec * s.s + s.p);
        ctx.fillStyle = 'rgba(' + s.c + ',' + (0.25 + 0.75 * s.z * tw).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * (0.6 + s.z * 0.6), 0, 6.283); ctx.fill();
      }
      if (!reduce && !document.hidden) requestAnimationFrame(frame);
    }

    size(); requestAnimationFrame(frame);
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(size, 150); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden && !reduce) requestAnimationFrame(frame); });
  }

  window.Bedrock = {
    hasAccess() { try { return localStorage.getItem(KEY) === 'granted'; } catch (_) { return false; } },
    grant() { try { localStorage.setItem(KEY, 'granted'); } catch (_) {} },
    space
  };
})();
