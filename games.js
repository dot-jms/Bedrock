/* Game library. Add a game by adding a line here. */
window.BEDROCK_GAMES = [
  { id: 'slope',       name: 'Slope',             cat: 'arcade',      desc: 'Steer a ball down a neon slope without falling off.',      url: 'https://slope-game.github.io/' },
  { id: 'run3',        name: 'Run 3',             cat: 'arcade',      desc: 'Run and jump through tunnels in space.',                    url: 'https://run-3.github.io/' },
  { id: 'dino',        name: 'Chrome Dino',       cat: 'arcade',      desc: 'Jump cacti and duck pterodactyls.',                         url: 'https://chromedino.com/' },
  { id: 'flappy',      name: 'Flappy Bird',       cat: 'arcade',      desc: 'Fly through the pipes. Harder than it looks.',              url: 'https://flappybird.io/' },
  { id: 'gd',          name: 'Geometry Dash',     cat: 'arcade',      desc: 'Rhythm platformer. Jump on the beat.',                      url: 'https://scratch.mit.edu/projects/105500895/' },
  { id: 'hextris',     name: 'Hextris',           cat: 'arcade',      desc: 'Rotate a hexagon to match falling blocks.',                 url: 'https://hextris.io/' },
  { id: '2048',        name: '2048',              cat: 'puzzle',      desc: 'Slide and merge tiles to reach 2048.',                      url: 'https://2048game.com/' },
  { id: 'tetris',      name: 'Tetris',            cat: 'puzzle',      desc: 'Clear lines before the stack hits the top.',                url: 'https://tetris.com/play-tetris' },
  { id: 'rope',        name: 'Cut the Rope',      cat: 'puzzle',      desc: 'Cut ropes to drop candy into Om Nom’s mouth.',         url: 'https://cuttherope.ie/' },
  { id: 'wordle',      name: 'Wordle',            cat: 'puzzle',      desc: 'Guess the five-letter word in six tries.',                  url: 'https://wordlegame.org/' },
  { id: 'alchemy',     name: 'Little Alchemy 2',  cat: 'puzzle',      desc: 'Combine elements to discover new ones.',                    url: 'https://littlealchemy2.com/' },
  { id: 'chess',       name: 'Chess',             cat: 'strategy',    desc: 'Play the computer at your level.',                          url: 'https://www.chess.com/play/computer' },
  { id: 'agar',        name: 'Agar.io',           cat: 'multiplayer', desc: 'Eat smaller cells, avoid bigger ones.',                     url: 'https://agar.io/' },
  { id: 'slither',     name: 'Slither.io',        cat: 'multiplayer', desc: 'Grow your snake by eating pellets and other players.',      url: 'https://slither.io/' },
  { id: 'skribbl',     name: 'skribbl.io',        cat: 'multiplayer', desc: 'Draw and guess with friends.',                              url: 'https://skribbl.io/' },
  { id: 'pacman',      name: 'Pac-Man',           cat: 'classic',     desc: 'Eat the dots, dodge the ghosts.',                           url: 'https://www.google.com/logos/2010/pacman10-i.html' },
  { id: 'minecraft',   name: 'Minecraft Classic', cat: 'creative',    desc: 'The original creative mode, in your browser.',              url: 'https://classic.minecraft.net/' }
];

window.BEDROCK_CATEGORIES = [
  { id: 'all',         label: 'All' },
  { id: 'arcade',      label: 'Arcade' },
  { id: 'puzzle',      label: 'Puzzle' },
  { id: 'strategy',    label: 'Strategy' },
  { id: 'multiplayer', label: 'Multiplayer' },
  { id: 'classic',     label: 'Classic' },
  { id: 'creative',    label: 'Creative' }
];

/* Per-category tint added to the gray stone texture. */
window.BEDROCK_TINTS = {
  arcade:      [10, 52, 44],
  puzzle:      [48, 30, 66],
  strategy:    [64, 44, 10],
  multiplayer: [14, 38, 70],
  classic:     [70, 20, 24],
  creative:    [20, 58, 20]
};
