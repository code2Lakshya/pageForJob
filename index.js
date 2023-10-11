const clickHandler = (work) => {
    document.querySelector('nav ul').style.transform = work === 'open' ? 'translateX(0)' : 'translateX(100%)';
}
window.addEventListener('resize',()=>{
    document.querySelector('nav ul').style.transform =window.innerWidth>620?'translateX(0)':'translateX(100%)';
})