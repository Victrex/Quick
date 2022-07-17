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

const changeIcon = () => {
  
  let IconList = document.getElementById('listIcon');
  let corp = document.getElementById('corp');
  corp.style = '';
  let cardCorp = document.querySelectorAll('.cardCorp');
  if (IconList.classList == 'fa-solid fa-list-ul') {
    IconList.classList = 'fa-solid fa-grip-vertical';
    cardCorp.forEach(element =>{
      element.classList = "cardCorp gridCard";
    });
    corp.classList = 'corp_container grid'

    

  } else{
    IconList.classList = 'fa-solid fa-list-ul';
    cardCorp.forEach(element =>{
      element.classList = "cardCorp flexCard";
    });
    corp.classList = 'corp_container flex'
  }
}