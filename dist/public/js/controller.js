var clientUsers = [
    {
        name: 'Victor',
        last_name: 'Vasquez',
        email: 'victrex1234@gmail.com',
        password: 'victor1234',
        phone: '9500-1170',
        ProfilePhoto: '../ASSETS/users/clntUsers/user_prueba.jpg',
        gender: 'masculino',
        shopping: [],
    },
    {
        name: 'Andre',
        last_name: 'Romanov',
        email: 'vgvasquez@gmail.com',
        password: '1234',
        phone: '9500-1170',
        ProfilePhoto: '../ASSETS/users/clntUsers/user_prueba.jpg',
        gender: 'masculino',
        shopping: [],
    },

];

var motUsers = [
    {
        name: 'Daniels',
        last_name: 'Hernandez',
        email: 'daniels@gmail.com',
        password: 'daniels1234',
        phone: '9746-6784',
        ProfilePhoto: '../ASSETS/user/motUsers/user_prueba.jpg',
        gender: 'masculino' 
    }
];
var companys = [
    {
        name: 'Pizza Hut',
        category: 'restaurante',
        photo: '../ASSETS/brands/pizza_hut.png',
        cover: '../ASSETS/brands/cover/pizza_hut_cover.jpg',
        desp: 'Si lo piensas bien, todo en el mundo se puede dividir en dos categorías: pizza y no pizza.'
        
    },
    {
        name: 'Little Caesars',
        category: 'restaurante',
        photo: '../ASSETS/brands/little_caesars.jpg',
        cover: '../ASSETS/brands/cover/little_caesars_cover.jpg',
        desp: 'Si lo piensas bien, todo en el mundo se puede dividir en dos categorías: pizza y no pizza.'
        
    },
    {
        name: 'Burguer King',
        category: 'restaurante',
        photo: '../ASSETS/brands/burguer_king.png',
        cover: '../ASSETS/brands/cover/burguer_king_cover.jpg',
        desp: 'Si lo piensas bien, todo en el mundo se puede dividir en dos categorías: pizza y no pizza.'
        
    }
]
var products = [
    {
        productName : 'Suprema',
        company: 'Pizza Hut',
        category: 'restaurante',
        price: 279.00,
        desp: 'Elaborada con Peperoni, carne de res y cerdo, champiñones, chile verde y cebolla.',
        photo: '../ASSETS/products/suprema.jpg',
    },
    {
        productName : 'Pepperoni o Jamón Lovers',
        company: 'Pizza Hut',
        category: 'restaurante',
        price: 279.00,
        desp: 'Pepperoni o jamón en abundancia, queso 100% mozzarella.',
        photo: '../ASSETS/products/pepperoni_o_jamon_lovers.jpg',
    },
    {
        productName : '4 estaciones',
        company: 'Pizza Hut',
        category: 'restaurante',
        price: 299.00,
        desp: 'Cuatro diferentes especialidades en una sola pizza: súper suprema, canadiense, pepperoni y jamón.',
        photo: '../ASSETS/products/4_estaciones.jpg',
    },
    {
        productName : 'Super Suprema',
        company: 'Pizza Hut',
        category: 'restaurante',
        price: 299.00,
        desp: 'Elaborada con pepperoni, carne de res y cerdo, salchicha italiana, jamón, champiñones, aceitunas, cebolla y chile verde.',
        photo: '../ASSETS/products/super_suprema.jpg',
    },
]

if (localStorage.getItem("products") == null) {
    localStorage.setItem("products", JSON.stringify(products));
}
if (localStorage.getItem("companys") == null) {
    localStorage.setItem("companys", JSON.stringify(companys));
}




var products = JSON.parse(localStorage.getItem("products"));
var users = JSON.parse(localStorage.getItem("users"));
  var mots = JSON.parse(localStorage.getItem("mot"));
  const ML = () =>{
    if (localStorage.getItem("mot") == null) {
        localStorage.setItem("mot", JSON.stringify(motUsers));
        window.location.reload();
    };
    
  };
  

  const Mlogin = () => {
    let email = document.getElementById('Email2');
    let password = document.getElementById('Password2');
    if (!email.value == "") {
        let a = mots.filter(mots => mots.email == email.value);
        if (a.length == 0) {
            document.querySelector(".noProfile").classList.remove("active");
        } else {
            
                if (a[0].password == password.value ) {
                    location.href ="cat.html";
                    localStorage.setItem("keyUser", a[0].email); 
                    return false;
                    
                }else{
                    document.querySelector(".noProfile").classList.remove("active");//cuando la contraseña sea incorrecta
                    document.querySelector(".noProfile").innerHTML = "La contraseña es incorrecta";
                };
        }
      
    }
    
};
const UL = () =>{
    if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(clientUsers));
        window.location.reload();
    }
  };
  const Ulogin = () => {
    let email = document.getElementById('Email1');
    let password = document.getElementById('Password1');
    if (!email.value == "") {
        let a = users.filter(users => users.email == email.value);
        if (a.length == 0) {
            document.querySelector(".noProfile").classList.remove("active");//cuando no se encuentre el perfil en la base de datos
        } else {
                if (a[0].password == password.value ) {
                     location.href = "../index.html"; 
                    localStorage.setItem("keyUser", a[0].email);
                    return false;             
                    
                }else{
                    document.querySelector(".noProfile").classList.remove("active");//cuando la contraseña sea incorrecta
                    document.querySelector(".noProfile").innerHTML = "La contraseña es incorrecta";
                };
        }
      
    }

  };
const cwUser = () =>{
    let photo = document.querySelector('.profilePhoto');
    let name = document.querySelector('.nameUser');
    let phone = document.querySelector('.phoneUser');
    let email = document.querySelector('.emailUser');
    let keyUser = localStorage.getItem("keyUser");
    users.forEach(e => {
        if(e.email == keyUser){
            console.log("El usuario es " + e.email);
            photo.innerHTML = `<img src="${e.ProfilePhoto}" alt="" id="img_profile">`;
            name.innerHTML = e.name + " " + e.last_name;
            phone.innerHTML = e.phone;
            email.innerHTML = e.email;
        }
    })

}



const loadCorps = () => {
    let i = 0;
    document.getElementById('corp').innerHTML = ''
    var companys = JSON.parse(localStorage.getItem("companys"));
    companys.forEach(e => {
        document.getElementById('corp').innerHTML += `
        <div class="cardCorp gridCard">
        <div class="cardCorp_content">
            <div class="corpImg">
                <img src="${e.photo}" alt="">
            </div>
            <div class="corpInfo">
                <h1>${e.name}</h1> 
            </div>
        </div>
            <button type="button" id="${i}"  onclick="catIndex(${i})" class="btn btn_secondary gridBtn" > Ver Productos</button>      
    </div>  
        `;
    i++;
    });
}

const catIndex = (a) => {
    console.log(companys[a].name)
    localStorage.setItem("company", companys[a].name);
    location.href = "prd.html"
};


const prd = () => {
    
    console.log("Pagina Cargada");
    let prdContainer = document.getElementById('prds');
    let keyPrd = localStorage.getItem("company");
    let companys = JSON.parse(localStorage.getItem("companys"));
    let header = document.querySelector(".header");
    let i = 0;
    companys.forEach(d => {
        if (d.name == keyPrd) {
            header.innerHTML = `
    <img src="${d.cover}" alt="">
    <div class="bg"></div>
    <div class="PrdName tit_primary" id="PrdName">
        <h1>${d.name}</h1>
        <span>${d.desp}</span>
    </div>
    `;
        }
    });
    
    products.forEach(e => {
        if(e.company == keyPrd){
            prdContainer.innerHTML += `
            <a class="linkPrd" id="${i}" onclick="orderKey(this)">
                <hr>
                <div class="cardPrd">
                    <div class="cardPrd_header">
                        <img src="${e.photo}" alt="">
                    </div>
                    <div class="corpInfo">
                        <h1>${e.productName}</h1>
                        <span>PRECIO LPS. ${e.price}</span> 
                        <p>
                            ${e.desp}
                        </p>
                    </div>
                    
                </div>
                <hr>
            </a>
            `;
            i++;
            console.log(e.company);
        }
    })
};

const orderKey = (a) => {localStorage.setItem("orderKey", a.id);
location.href = "order.html"
}
const order = () => {    
    let product = JSON.parse(localStorage.getItem("products"));
    let orderKey = JSON.parse(localStorage.getItem('orderKey'));
    let name = document.getElementById('name');
    let price = document.getElementById('price');
    let desp = document.getElementById('desp');
    let img = document.querySelector('.order_img');
    img.innerHTML = `<img src="${product[orderKey].photo}" alt="">`;
    document.getElementById('total').innerHTML =  product[orderKey].price + 70.00 ;
    document.getElementById('total_price').innerHTML =  product[orderKey].price ; 
    name.innerHTML = product[orderKey].productName;
    price.innerHTML = `Precio Lps. ${product[orderKey].price}`;
    desp.innerHTML = product[orderKey].desp; 
};
const chargeOrder = () => {
    console.log("OrdenCargada");
    //localStorage.removeItem('orderKey');
    let totalPrice = document.getElementById('total');
    console.log("el total del pedido es " + totalPrice.innerHTML);
    let user = localStorage.getItem("keyUser");
    let orderList = JSON.parse(localStorage.getItem("orderlist"));
    users.forEach(element => {
        if (element.email == user) {
            let order = {
                nameProduct : `'${document.getElementById('name').innerHTML}'`,
            totalOrder: `${totalPrice.innerHTML}`,
            img: `'${document.querySelector('.order_img').innerHTML}'`,
            quantity: `${document.getElementById('total_cont').innerHTML}`,
            };
            element.shopping.push(order);
        console.log(element);
        localStorage.setItem("orderlist", JSON.stringify(users));
        }
    });
    console.log(users);
   
    location.href = "../index.html";
}


(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    //Recorremos los forms y evitamos en envío sin validacion
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })();

  const cargarUsers = () => {
    let x = JSON.parse(localStorage.getItem("users"));
    console.log(x);
  }


  const pedidos = () => {
        let x = document.getElementById('prds');
        let y = JSON.parse(localStorage.getItem("orderlist"));
        y.forEach(e => {
            console.log(localStorage.getItem("KeyUser"));
            if (e.email == localStorage.getItem("keyUser")) {
                e.shopping.forEach(element => {
                    x.innerHTML += `
                <a class="linkPrd" href="#">
                <hr>
                <div class="cardPrd">
                    <div class="cardPrd_header">
                        ${element.img}
                    </div>
                    <div class="corpInfo">
                        <h1>${element.nameProduct}</h1>
                        <span>Total por Este Pedido <span id="totalOrder"> Lps ${element.totalOrder}</span></span> 
                        <span>Cantidad de Productos: <span id="totalQuantity"> #${element.quantity}</span></span>
                    </div>
                    
                </div>
                <hr>
            </a>
                `;
                });
                
            }
        });
        
  }
  

  //cargar productos en el crud de admin Productos

  const productsAdmin = document.getElementById('productsAdmin');
  const loadProductsAdmin = () => {
    let i = 1;
    products.forEach(e => {
        productsAdmin.innerHTML += `
        <tr>
                <td>${i}</td>
                <td>${e.productName}</td>
                <td>${e.price}</td>
                <td><a href="#">Abrir Imagen</a></td>
                <td>${e.company}</td>
                <td>${e.category}</td>
                <td>${e.desp}</td>
                <td>
                    <div class="btncmp">
                        <button class="btn editbtn" data-toggle="modal" data-target="#staticBackdrop">Editar</button>
                        <button class="btn delbtn">Eliminar</button>
                    </div>
                </td>
            
                
              </tr>
        `
        i++;
    });
  }

