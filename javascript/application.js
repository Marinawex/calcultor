const mode = document.getElementById('mode');
mode.addEventListener('click',()=>{const el = document.body; el.classList.toggle('dark');});

const infor = document.querySelector('#info')
infor.addEventListener('click',e =>{alert('Developer’s name:Marina\nCalculator’s version:1.0.0\nthis is a calculetor')})