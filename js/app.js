function navCollapse() {
    var x = document.getElementById("myTopnav");
    var y = document.querySelector('.icon');
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

    y.classList.toggle('colorActive');
  }