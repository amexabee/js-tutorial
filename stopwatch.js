let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let sec = document.querySelector('#sec');
let min = document.querySelector('#min');
let hr = document.querySelector('#hr');
let interval;

startBtn.addEventListener('click', start);

function start() {
  interval = setInterval(increment, 1000);
}

function increment() {
  let s = parseInt(sec.textContent) + 1;
  let m = parseInt(min.textContent) + 1;
  let h = parseInt(hr.textContent) + 1;
  if (s === 60) {
    if (m === 60) {
      hr.textContent = h.toString().padStart(2, '0');
      min.textContent = '00';
      sec.textContent = '00';
    } else {
      min.textContent = m.toString().padStart(2, '0');
      sec.textContent = '00';
    }
  } else sec.textContent = s.toString().padStart(2, '0');
}

stopBtn.addEventListener('click', () => clearInterval(interval));

resetBtn.addEventListener('click', () => {
  sec.textContent = '00';
  min.textContent = '00';
  hr.textContent = '00';
});

// Full screen logic
let full = document.getElementById('full');
full.addEventListener('click', () => {
  const elem = document.documentElement;
  if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
    full.style.display = 'none';
  } else {
    alert('Fullscreen API is not supported.');
  }
});

document.addEventListener('webkitfullscreenchange', () => {
  if (!document.webkitFullscreenElement) {
    full.style.display = 'block';
  }
});
