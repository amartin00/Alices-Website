const topnavS = document.querySelector('.topnav');

window.addEventListener('scroll', () => {
    if(window.scrollY >50){
        topnavS.classList.add('topnav-scrolled');
    } else if(window.scrollY <= 50){
        topnavS.classList.remove('topnav-scrolled');
    }
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }