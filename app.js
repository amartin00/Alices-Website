const topnavS = document.querySelector('.topnav');

window.addEventListener('scroll', () => {
    if(window.scrollY >50){
        topnavS.classList.add('topnav-scrolled');
    } else if(window.scrollY <= 50){
        topnavS.classList.remove('topnav-scrolled');
    }
});