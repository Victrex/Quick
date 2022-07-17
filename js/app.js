var x = document.getElementById("myTopnav");
    var y = document.getElementById('icon');
    var z = document.getElementById('body');
    var footerActive = document.getElementById('footer_nav');
function navCollapse() {
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
     z.classList.toggle('bodyScroll');
    y.classList.toggle('colorActive');
    footerActive.classList.toggle('active');
  }

