const mode = document.getElementById('mode');
mode.addEventListener('click', () => { const el = document.body; el.classList.toggle('dark'); });
const info = document.querySelector('#info');
info.addEventListener('click', e => { alert('Developer’s name:Marina\nCalculator’s version:1.0.0\nthis is a calculetor'); });
const log = document.querySelector('#history');
log.addEventListener('click', () => { const el = document.body; el.classList.toggle('show'); });
