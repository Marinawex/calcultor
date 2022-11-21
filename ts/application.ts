const mode = document.getElementById('mode');
mode.addEventListener('click',()=>{const el = document.body; el.classList.toggle('dark');});

const info = document.querySelector('#info');
info.addEventListener('click',e =>{alert('Developer’s name:Marina\nCalculator’s version:1.0.0\nthis is a calculetor');});


const historyBox: HTMLElement = document.querySelector('.operation-log');

const log = document.querySelector('#history');
log.addEventListener('click', () =>{
    if (historyBox.style.display !== 'block'){
        historyBox.style.display = 'block';
    } else {
        historyBox.style.display = 'none';
    }
    
});

const sciBox: HTMLElement = document.querySelector('.sci');

const sciButton: Element = document.querySelector('#seintific');
sciButton.addEventListener('click', () =>{
    if (sciBox.style.display !== 'block'){
        sciBox.style.display = 'block';
    } else {
        sciBox.style.display = 'none';
    }
    
}
)

