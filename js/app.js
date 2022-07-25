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

var product = JSON.parse(localStorage.getItem("products"));
let KeyOrder = JSON.parse(localStorage.getItem('orderKey'));


const moreQ = () =>{
  let totalOrder;
  quantity.value = ++cont;
  totalCont.innerHTML = quantity.value ;
  total.innerHTML = (quantity.value * product[KeyOrder].price) + 70.00; //el precio del producto

}
const lessQ = () =>{
  let totalOrder;
  quantity.value = --cont;
  totalCont.innerHTML = quantity.value ;
  total.innerHTML = (quantity.value * product[KeyOrder].price) + 70.00;
  if (cont < 1) {
    alert('La Cantidad no Es valida')
    cont = 1;
    quantity.value = cont--;
    totalCont.innerHTML = quantity.value ;
    total.innerHTML = (quantity.value * product[KeyOrder].price) + 70.00;
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

let statusSelect = document.getElementById('StatusControlSelect');
const status = () => {
  let x = document.getElementById('status');
  if (statusSelect.selectedOptions[0].value == 'En el Origen') {
    x.innerHTML = "<h1>En Origen</h1>";
    x.classList = "status st_origin"
    
  }else
  if (statusSelect.selectedOptions[0].value == 'En Camino') {
    x.innerHTML = "<h1>En Camino</h1>";
    x.classList = "status st_coming"
    
  }else
  if (statusSelect.selectedOptions[0].value == 'Punto de Entrega') {
    x.innerHTML = "<h1>En Punto de Entrega</h1>";
    x.classList = "status st_delivery"
    
  }


};

const logout = () =>{
  localStorage.removeItem("keyUser");
  localStorage.removeItem("users");
  localStorage.removeItem("company");
  localStorage.removeItem("companys");
  localStorage.removeItem("products");
  localStorage.removeItem("mot");
}