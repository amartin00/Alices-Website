const topnavS = document.querySelector('.topnav');

window.addEventListener('scroll', () => {
    if(window.scrollY >50){
        topnavS.classList.add('topnav-scrolled');
    } else if(window.scrollY <= 50){
        topnavS.classList.remove('topnav-scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const topnavLinks = document.querySelector('.topnav a');
  
    hamburgerMenu.addEventListener('click', function() {
      topnavLinks.classList.toggle('show');
    });
  });