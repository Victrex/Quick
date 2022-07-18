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
    if(footerActive != null){
      footerActive.classList.toggle('active');
    }
    
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

let more = document.getElementById('more');
var quantity = document.getElementById('quan_input');
let less = document.getElementById('less');
let totalCont = document.getElementById('total_cont');
let cont = 1;
let total = document.getElementById('total');


const moreQ = () =>{
  quantity.value = ++cont;
  totalCont.innerHTML = quantity.value ;
  total.innerHTML = quantity.value * 139.00; //el precio del producto
}
const lessQ = () =>{
  quantity.value = --cont;
  totalCont.innerHTML = quantity.value ;
  if (cont < 1) {
    alert('La Cantidad no Es valida')
    cont = 1;
    quantity.value = cont;
  totalCont.innerHTML = quantity.value ;
  total.innerHTML = quantity.value * 139.00;
  }
}

let email1 = document.getElementById('InputEmail1');
let password1 = document.getElementById('Password1');
const validateLogin = () => {
  if(email1.value == ''){
    alert("Correo Electronico no valido");
  }else{
    if(password1.value == ''){
      alert("Contraseña no valida")
    }
  }
  
}