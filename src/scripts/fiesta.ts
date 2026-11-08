// Efectos festivos compartidos: confeti y chispitas al tocar.
const COLORES = ['#FF7A59', '#FF6FAE', '#FFC94D', '#0FB5BA', '#B98CFF', '#3BA55C'];
const EMOJIS = ['🌺', '🐚', '⭐', '🌸', '💖', '🎈', '✨'];

function capa(): HTMLElement {
  let el = document.getElementById('capa-fiesta');
  if (!el) {
    el = document.createElement('div');
    el.id = 'capa-fiesta';
    document.body.appendChild(el);
  }
  return el;
}

const azar = (min: number, max: number) => min + Math.random() * (max - min);

export function lanzarConfeti(cantidad = 60) {
  const c = capa();
  for (let i = 0; i < cantidad; i++) {
    const s = document.createElement('span');
    s.className = 'confeti';
    if (i % 3 === 0) {
      s.textContent = EMOJIS[i % EMOJIS.length];
      s.style.fontSize = azar(16, 30) + 'px';
    } else {
      s.classList.add('papel');
      s.style.background = COLORES[i % COLORES.length];
      s.style.width = azar(6, 11) + 'px';
      s.style.height = azar(10, 16) + 'px';
    }
    s.style.left = azar(0, 100) + '%';
    s.style.animationDelay = azar(0, 0.8) + 's';
    s.style.animationDuration = azar(2.6, 4) + 's';
    s.style.setProperty('--giro', azar(-720, 720) + 'deg');
    s.style.setProperty('--dx', azar(-80, 80) + 'px');
    c.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}

export function chispas(x: number, y: number, cantidad = 8) {
  const c = capa();
  for (let i = 0; i < cantidad; i++) {
    const s = document.createElement('span');
    s.className = 'chispa';
    s.textContent = ['✨', '💖', '⭐', '🌸'][i % 4];
    const ang = (Math.PI * 2 * i) / cantidad + azar(-0.3, 0.3);
    const dist = azar(40, 80);
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.setProperty('--dx', Math.cos(ang) * dist + 'px');
    s.style.setProperty('--dy', Math.sin(ang) * dist + 'px');
    c.appendChild(s);
    setTimeout(() => s.remove(), 900);
  }
}
