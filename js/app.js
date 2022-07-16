function navCollapse() {
    var x = document.getElementById("myTopnav");
    var y = document.querySelector('.icon');
    var z = document.querySelector('.body');
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    z.classList.toggle('bodyScroll')
    y.classList.toggle('colorActive');
  }