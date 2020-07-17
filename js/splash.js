const splash = document.querySelector('.splash-screen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },4000)
})