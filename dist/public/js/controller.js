



var products = JSON.parse(localStorage.getItem("products"));
var users = JSON.parse(localStorage.getItem("users"));
  var mots = JSON.parse(localStorage.getItem("mot"));
/*   const ML = () =>{
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
                    location.href ="/motor/inicio";
                    localStorage.setItem("keyUser", a[0].email); 
                    return false;
                    
                }else{
                    document.querySelector(".noProfile").classList.remove("active");//cuando la contraseña sea incorrecta
                    document.querySelector(".noProfile").innerHTML = "La contraseña es incorrecta";
                };
        }
      
    }
    
}; */


let resM
const cargarML = (item) => {
   fetch(('http://localhost:8585/admin/motoristas/' + item))
  .then(response => response.json())
  .then(data => {
      resM = data
      localStorage.setItem("motors", JSON.stringify(resM))
      
  }).catch(error => console.log(error)); 
  
}

const Mlogin = () => {
    let email = document.getElementById('Email2');
    let password = document.getElementById('Password2');
    cargarML(email.value)
  let user = JSON.parse(localStorage.getItem("motors"))
  if (!email.value ==  "") {
      let a = user;
      if (user.email == null) {
            console.log('Nullo');
      }
      if (a.email != email.value) {
          document.querySelector(".noProfile").classList.remove("active");//cuando no se encuentre el perfil en la base de datos
          
      } else {
              if (a.password == password.value ) {
                   location.href = "../motor/inicio"; 
                   localStorage.removeItem("motors")
                  localStorage.setItem("keyUserMotor", JSON.stringify({
                      name: `${a.name}`,
                      email: `${a.email}`,
                      phone: `${a.telephone}`,
                      ProfilePhoto: `../ASSETS/users/clntUsers/${a.photo}`,
                      gender: `${a.gender}`
                  }));
                  return false;             
                  
              }else{
                  document.querySelector(".noProfile").classList.remove("active");//cuando la contraseña sea incorrecta
                  document.querySelector(".noProfile").innerHTML = "La contraseña es incorrecta";
              };
      }

  } 

};









  var resp;
  const cargarUL = (item) => {
    fetch(('http://localhost:8585/admin/clientes/' + item))
    .then(response => response.json())
    .then(data => {
        resp = data
        localStorage.setItem("users", JSON.stringify(resp))
        
    }).catch(error => console.log(error));
    
  }

  const Ulogin = () => {
    let email = document.getElementById('Email1');
    let password = document.getElementById('Password1');
    cargarUL(email.value)
    let user = JSON.parse(localStorage.getItem("users"))
    if (!email.value ==  "") {
        let a = user;
        if (a.email != email.value) {
            document.querySelector(".noProfile").classList.remove("active");//cuando no se encuentre el perfil en la base de datos
            
        } else {
                if (a.password == password.value ) {
                     location.href = "../quick"; 
                     localStorage.removeItem("users")
                    localStorage.setItem("keyUser", JSON.stringify({
                        name: `${a.name}`,
                        email: `${a.email}`,
                        phone: `${a.telephone}`,
                        ProfilePhoto: `../ASSETS/users/clntUsers/${a.photo}`,
                        gender: `${a.gender}`,
                        address: `${a.address}`
                    }));
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
    let keyUser = JSON.parse(localStorage.getItem("keyUser"));
    console.log(keyUser);

            console.log("El usuario es " + keyUser);
            photo.innerHTML = `<img src="${keyUser.ProfilePhoto}" alt="" id="img_profile">`;
            name.innerHTML = keyUser.name;
            phone.innerHTML = keyUser.phone;
            email.innerHTML = keyUser.email;


}






const chargeOrder = () => {
    console.log('asdawd');
    localStorage.removeItem('orderKey');
    let totalPrice = document.getElementById('total');
    let keyUser = JSON.parse(localStorage.getItem("keyUser"));
    let products = JSON.parse(localStorage.getItem("products"));

            let order = {
                nameProduct : `${document.getElementById('name').innerHTML}`,
                company: `${products.company}`,
                totalOrder: `${totalPrice.innerHTML}`,
                photo: `${document.querySelector('.img_order_took').id}`,
                quantity: document.getElementById('total_cont').innerHTML,
                userName: `${keyUser.name}`,
                userEmail: `${keyUser.email}`,
                userPhone: keyUser.phone,
                userAddress: `${keyUser.address}`
            };
            //element.shopping.push(order);
        if (localStorage.getItem("orderlist") == null) {
            console.log("no hay archivos");
        }
        localStorage.setItem("orderlist", JSON.stringify(order));
        postOrder(order)


    location.href = "../quick";
};



const postOrder = async (order) => {
    const respuesta = await fetch('http://localhost:8585/admin/ordenes/postOrders', {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
            }
    }).then(respuesta => respuesta.json())
    
    .then(/* window.location.reload() */ console.log(order)).catch(error => console.log(error)); 
    ;
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
        console.log(y);
                    x.innerHTML += `
                <a class="linkPrd" href="#">
                <hr>
                <div class="cardPrd">
                    <div class="cardPrd_header">
                        ${y.img}
                    </div>
                    <div class="corpInfo">
                        <h1>${y.nameProduct}</h1>
                        <span>Total por Este Pedido <span id="totalOrder"> Lps ${y.totalOrder}</span></span> 
                        <span>Cantidad de Productos: <span id="totalQuantity"> #${y.quantity}</span></span>
                    </div>
                    
                </div>
                <hr>
            </a>
                `;
    
        
  }

  const putEditCol = async (id) => {
    let name = document.getElementById("nameEdit");
    let date = document.getElementById("dateEdit");
    let telephone = document.getElementById("telephoneEdit");
    let address = document.getElementById("addressEdit");
    let photo = document.getElementById("photoEdit");
    let gender = document.getElementById("genderEdit");
    let userName = document.getElementById("userNameEdit");
    let email = document.getElementById("emailEdit");
    let password = document.getElementById("passwordEdit");
    
    let obj = {
        name: name.value,
        date: date.value,
        telephone: telephone.value,
        address: address.value,
        gender: gender.value,
        userName: userName.value,
        email: email.value,
        password: password.value,
        photo: photo.innerHTML
    } 
    console.log(obj);
        const respuesta = await fetch(('http://localhost:8585/admin/clientes/' + id.id), {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(respuesta => respuesta.json())
        .then(data => console.log(data))
        .then(window.location.reload());
  }


  let ClntToEdit
  const putEditCliente = async (id) => {
    const respuesta = await fetch(('http://localhost:8585/admin/cliente/' + id.id), {
        method: "get",
    });
     ClntToEdit = await respuesta.json()
    console.log(ClntToEdit);
    let name = document.getElementById("nameEdit");
    let date = document.getElementById("dateEdit");
    let telephone = document.getElementById("telephoneEdit");
    let address = document.getElementById("addressEdit");
    let photo = document.getElementById("photoEdit");
    let gender = document.getElementById("genderEdit");
    let userName = document.getElementById("userNameEdit");
    let email = document.getElementById("emailEdit");
    let password = document.getElementById("passwordEdit");

    name.value = ClntToEdit.name;
    date.value = ClntToEdit.date;
    telephone.value = ClntToEdit.telephone;
    address.value = ClntToEdit.address;
    photo.innerHTML = `${ClntToEdit.photo}`;
    gender.value = `${ClntToEdit.gender}`;
    userName.value = ClntToEdit.userName;
    email.value = ClntToEdit.email;
    password.value = ClntToEdit.password;
    document.getElementById('modal-footer-editCol').innerHTML = `
    <button type="button" class="btn btn_secondary" data-dismiss="modal">Cancelar</button>
    <button type="button" class="btn btn_primary" id="${id.id}" onclick="putEditCol(this)">Guardar Cambios</button>
    `
/*     let name = document.getElementById("nameEdit");
    let date = document.getElementById("dateEdit");
    let telephone = document.getElementById("telephone");
    let address = document.getElementById("addressEdit");
    let photo = document.getElementById("photo");
    let gender = document.getElementById("gender");
    let userName = document.getElementById("userName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");


    let obj = {
        name: name.value,
        date: date.value,
        telephone: telephone.value,
        address: address.value,
        gender: gender.value,
        userName: userName.value,
        email: email.value,
        password: password.value,
        photo: photo.value

    } 
    const respuesta = await fetch(('http://localhost:8585/admin/clientes/' + id.id), {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        name: `${name.value}`,
        date: `${date.value}`,
        telephone: `${telephone.value}`,
        address: `${address.value}`,
        gender: `${gender.value}`,
        userName: `${userName}`,
        email: `${email.value}`,
        password: `${password.value}`,
        photo: `${photo.value}`
    })
}).then(respuesta => respuesta.json())
.then(data => console.log(data))
.then(window.location.reload());
    */
}





  //import axios from 'axios';
  const eliminaProductosEmpresa = (id) => {
    //let identifier = sessionStorage.getItem(id);

    axios({
        method: 'delete',
        url:`./productos/${id}`,
        ResponseType:"json"
    }).then(
        (res) => {
            alert("Producto Eliminado")
        }
    ).catch(err=>{
        console.log(err)
    });

  }

  function updateprd(id) {
    console.log(id);
  }
  const updateproduct = (id) => {
    console.log("hola");
  }



  const cargarCliente = async () => {
    const respuesta = await fetch(('http://localhost:8585/admin/clientes/get'), {
        method: "get"
    });
    let clientsArray = await respuesta.json();
    console.log(clientsArray);
    const loadClientAdmin = () => {
        const clientesAdmin = document.getElementById('clientAdmin');
        
        let i = 1;
        clientsArray.forEach(e => {
            clientesAdmin.innerHTML += `
            <tr>
            <td>${i}</td>
            <td><a href="#">${e.name}</a></td>
            <td>${e.gender}</td>
            <td>${e.telephone}</td>
            <td>${e.email}</td>
            <td>
                <div class="btncmp">
                    <button class="btn editbtn" data-toggle="modal" id="${e._id}" onclick="putEditCliente(this)" data-target="#staticBackdrop2">Editar</button>
                    <input class="btn delbtn btn_large" onclick="deleteClienteAdmin(this)" id="${e._id}" data-bs-toggle="modal-delete" data-bs-target="#modal-delete"value="Eliminar">
                </div>
            </td>
          </tr>
            
            `
            i++;
        })
      }
      loadClientAdmin()
  }
 /*  const API_URL_CLIENT = 'http://localhost:8585/admin/clientes/get';
  var clientArray = [];
  const cargarClientes = () => {
    fetch(API_URL_CLIENT)
    .then(response => response.json())
    .then(data => {
        clientArray = data
        loadClientAdmin(clientArray)
    })
  }

  
  const loadClientAdmin = (client) => {
    const clientesAdmin = document.getElementById('clientAdmin');
    
    let i = 1;
    clientArray.forEach(e => {
        clientesAdmin.innerHTML += `
        <tr>
        <td>${i}</td>
        <td><a href="#">${e.name}</a></td>
        <td>${e.gender}</td>
        <td>${e.telephone}</td>
        <td>${e.email}</td>
        <td>
            <div class="btncmp">
                <button class="btn editbtn" data-toggle="modal" id="${e._id}" onclick="putEditCliente(this)" data-target="#staticBackdrop2">Editar</button>
                <input class="btn delbtn btn_large" onclick="deleteClienteAdmin(this)" id="${e._id}" data-bs-toggle="modal-delete" data-bs-target="#modal-delete"value="Eliminar">
            </div>
        </td>
      </tr>
        
        `
        i++;
    })
  } */

  
/* const action = (id) => {
    document.getElementById('editButton').id = id;
} */
const loadToIDClientes = async (id) => {
    
    const respuesta = await fetch(('http://localhost:8585/admin/clientes/' + id.id), {
    method: "get"
    });

    ClientToEdit = await respuesta.json();
    let response = ClientToEdit[0]
    console.log(ClientToEdit[0]);

    document.getElementById("nameEdit").value = `${response.name}`
    document.getElementById("dateEdit").value = `${response.dateeEdit}`,
    document.getElementById("telephone").value = `${response.telephone}`
    document.getElementById("addressEdit").value = `${response.responseaddress}`
    document.getElementById("photo").value = `${response.gender}`
    document.getElementById("gender").value =  `${response.userName}`
    document.getElementById("userName").value = `${response.email}`
    document.getElementById("email").value = `${response.password}`
    document.getElementById("password").value = `${response.photo}`
    document.getElementsByName('editButton').id = id.id;
    document.getElementById('modal_footer_id').innerHTML = `
    <button type="button" class="btn btn_secondary" data-dismiss="modal">Cancelar</button>
    <button type="button" name="editButton" id="${id.id}" class="btn btn_primary" onclick="putEdit(this)">Editar Producto</button>`
}


  const deleteClientAdmin = async (id) => {
        const respuesta = await fetch(('http://localhost:8585/admin/clientes/' + id.id), {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(respuesta => respuesta)
        .then(data => console.log(data))
        .then(window.location.reload())
        
  }


  const API_URL_MOTOR = 'http://localhost:8585/admin/motoristas/get';
  var motoristasArray = [];
  const cargarMotor = () => {
    fetch(API_URL_MOTOR)
    .then(response => response.json())
    .then(data => {
        motoristasArray = data
        console.log(motoristasArray);
        loadMotorAdmin(motoristasArray)
    })
  }

  
  const loadMotorAdmin = (client) => {
    const motorAdmin = document.getElementById('motorAdmin');
    
    let i = 1;
    motoristasArray.forEach(e => {
        motorAdmin.innerHTML += `
        <tr>
        <td>${i}</td>
        <td>#${e.code}</td>
        <td><a href="#">${e.nameMotor}</a></td>
        <td>${e.charge}</td>
        <td>${e.telephone}</td>
        <td>${e.state}</td>
        <td>
            <div class="btncmp">
                <button class="btn editbtn" data-toggle="modal" data-target="#staticBackdrop">Editar</button>
                <input type="submit" class="btn delbtn" data-bs-toggle="modal-delete" data-bs-target="#modal-delete" id="${e._id}" onclick="deleteMotAdmin(this)" value="Eliminar">
            </div>
        </td>
      </tr>
        
        `
        i++;
    })

  }
  const deleteMotAdmin = async (id) => {
    const respuesta = await fetch(('http://localhost:8585/admin/motoristas/' + id.id), {
        method: "delete",
        headers: {
            'Content-Type': 'application/json'
            },
    }).then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .then(window.location.reload())
  }

  const API_URL_EMPRESAS = 'http://localhost:8585/admin/empresas/get'  
var empresasArray = [];

  const cargarEmpresas = () => {
    fetch(API_URL_EMPRESAS)
    .then(response => response.json())
    .then(data => {
        empresasArray = data
        loadCompAdmin(empresasArray)
    })
  };
  //cargarProducts();

  //cargar productos en el crud de admin Empresas

  
  const loadCompAdmin = (prod) => {
    const compAdmin = document.getElementById('compAdmin');
    
    let i = 1;
    empresasArray.forEach(e => {
        compAdmin.innerHTML += `
        <tr>
                <td>${i}</td>
                <td class="name">${e.companyName}</td>
                <td>${e.category}</td>
                <td>${e.since}</td>
                <td>${e.until}</td>
                <td>
                    <div class="btncmp">
                        <button class="btn editbtn" data-toggle="modal" data-target="#staticBackdrop">Editar</button>
                        
                            <input data-id="${e._id}" class="btn delbtn" id="${e._id}" type="submit" onclick="deleteCompAdmin(this)" value="Eliminar"
                        
                        
                    </div>
                </td>
            
                
              </tr>
        `

        i++;
    });
  };
  const deleteCompAdmin = async (id) => {
    const respuesta = await fetch(('http://localhost:8585/admin/company/' + id.id),{
        method: "delete",
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(respuesta => respuesta.json())
    .then(window.location.reload());
  }

  let save = document.getElementById('saveChanges');
  if (save!= null) {
    save.addEventListener("click", function (e) {
    location.href = "/admin"
  })
  }
  const LPT = () => {
    
    let order = JSON.parse(localStorage.getItem("order"));
    let imgOrder = document.getElementById("imgOrder");
    let nameOrder = document.getElementById("nameOrder");
    let orderCompany = document.getElementById("orderCompany");
    let clientName = document.getElementById("clientName");
    let clientAddress = document.getElementById("clientAddress");
    let clientPhone = document.getElementById("clientPhone");
    let total_price = document.getElementById("total_price");
    let total_cont = document.getElementById("total_cont");
    let total = document.getElementById("total");

    console.log(order);

    nameOrder.innerHTML = order.nameProduct;
    orderCompany.innerHTML = order.company
    clientName.innerHTML = order.userName;
    clientAddress.innerHTML = order.userAddress;
    clientPhone.innerHTML = order.userPhone;
    total_price.innerHTML = (order.totalOrder/order.quantity)-70;
    total_cont.innerHTML = order.quantity;
    total.innerHTML = order.totalOrder;

}
const finishOrder = () => {
    localStorage.removeItem("order")
    window.location.href='../motor/inicio';
    }

  