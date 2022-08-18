
let catSelected = localStorage.getItem('categoryActive');
let corpArray;
let prodArray;
let ordArray ={};
let productosArray;
//CARGAR LAS EMPRESAS DE CADA CATEGORIA
  const getCorps = async () => {
    const respuesta = await fetch('http://localhost:8585/admin/empresas/get', {
        method: "get",
    });
        corpArray = await respuesta.json();
        //corpArray = data
        document.getElementById('categorySelected').innerHTML = catSelected;    
    const loadCorps = () => {
            let i = 0;
            document.getElementById('corp').innerHTML = ''
            var category = localStorage.getItem("categoryActive");
            result = corpArray.filter(corp => corp.category == category);
            result.forEach(e => {
                
                var a = e.companyName
                    document.getElementById('corp').innerHTML += `
                <div class="cardCorp gridCard">
                <div class="cardCorp_content">
                    <div class="corpImg">
                        <img src="ASSETS/brands/${e.photo}" alt="">
                    </div>
                    <div class="corpInfo">
                        <h1>${e.companyName}</h1> 
                    </div>
                </div>
                    <a href="/client/productos" id="${e.companyName}"  onclick="catIndex(this)" class="btn btn_secondary gridBtn" > Ver Productos</a>      
            </div>  
                `;
            i++;
                
                
            });
        }
        loadCorps()
  };
    const catIndex = (a) => {
    localStorage.setItem("company", a.id);
    location.href = '/client/productos';
    };



  //CARGAR LOS PRODUCTOS DE LA EMPRESA SELECCIONADA EN EL CLIENTE





  const loadProdClient = async () => {
    const respuesta = await fetch('http://localhost:8585/admin/products', {
        method: "get"
    });
        prodArray = await respuesta.json();
        const prd = () => {
            let prdContainer = document.getElementById('prds');
            let company = localStorage.getItem("company");
            let header = document.querySelector(".header");
            let i = 0;
            result = prodArray.filter(prod => prod.company == company);
            result.forEach(e => {
                    prdContainer.innerHTML += `
                    <a class="linkPrd" href="../client/order" id="${e._id}" onclick="orderKey(this)">
                        <hr>
                        <div class="cardPrd">
                            <div class="cardPrd_header">
                                <img src="${e.photo}" alt="">
                            </div>
                            <div class="corpInfo">
                                <h1>${e.productName}</h1>
                                <span>PRECIO LPS. ${e.price}</span> 
                                <p>
                                    ${e.description}
                                </p>
                            </div>
                            
                        </div>
                        <hr>
                    </a>
                    `;
                    i++;
            })
        };

        prd()
  };
  const orderKey = (a) => {
    localStorage.setItem("orderKey", a.id);
}



const cargarProductsOrder = async () => {
    let id = localStorage.getItem('orderKey');
    const respuesta = await fetch(`http://localhost:8585/admin/productos/${id}`,{
        method: "get"
    });
        ordArray = await respuesta.json();
        ordenData = ordArray[0]
    const order = () => { 
        let name = document.getElementById('name');
        let price = document.getElementById('price');
        let desp = document.getElementById('desp');
        let img = document.querySelector('.order_img');
        img.innerHTML = `<img id="${ordenData.photo}" class="img_order_took" src="ASSETS/brands/${ordenData.photo}" alt="">`;
        document.getElementById('total').innerHTML =  ordenData.price + 70.00 ;
        document.getElementById('total_price').innerHTML =  ordenData.price ; 
        name.innerHTML = ordenData.productName;
        price.innerHTML = `Precio Lps. ${ordenData.price}`;
        desp.innerHTML = ordenData.description; 
    };
    
    order();
    localStorage.setItem("products", JSON.stringify(ordenData));
}

    const putEdit = async (id) => {
        let name = document.getElementById("nameEdit");
        let comp = document.getElementById("list-emp2");
        let cat = document.getElementById("tagsEdit");
        let pric = document.getElementById("priceEdit")
        let photo = document.getElementById("photo")
        let desp = document.getElementById("description")
        let obj = {
            productName: name.value,
            company: comp.value,
            category: cat.value,
            price: pric.value,
            photo: photo.value,
            description: desp.value
        }
        console.log(obj);
        const respuesta = await fetch(('http://localhost:8585/admin/productos/' + id.id), {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            productName: `${name.value}`,
            company: `${comp.value}`,
            category: `${cat.value}`,
            price: `${pric.value}`,
            photo: `${photo.value}`,
            description: `${desp.value}`
        })
    }).then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .then(window.location.reload());
        
    }
    const action = (id) => {
        document.getElementById('editButton').id = id;
    }
    const loadToIDPrd = async (id) => {
        
        const respuesta = await fetch(('http://localhost:8585/admin/productos/' + id.id), {
        method: "get"
        });
        PrdToEdit = await respuesta.json();
        let response = PrdToEdit[0]
        console.log(PrdToEdit[0]);
        document.getElementById("nameEdit").value = `${response.productName}`
        document.getElementById('priceEdit').value = `${response.price}`;
        document.getElementById('despEdit').innerHTML = `<label for="exampleFormControlTextarea1">Descripción</label>
        <textarea name="description" class="form-control" id="description" id="descriptionEdit" rows="3">${response.description}</textarea>`;
        document.getElementById('tagsEdit').value =`${response.category}`;
        document.getElementById('list-emp2').value =`${response.company}`;
        document.getElementsByName('editButton').id = id.id;
        document.getElementById('modal_footer_id').innerHTML = `
        <button type="button" class="btn btn_secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" name="editButton" id="${id.id}" class="btn btn_primary" onclick="putEdit(this)">Editar Producto</button>`
    }



  const cargarProducts = async () => {
    
    const respuesta = await fetch('http://localhost:8585/admin/products', {
        method: "get"
    });
        productosArray = await respuesta.json();
        console.log(productosArray[0]._id);
        const getCompanies = async () => {
            const response = await fetch('http://localhost:8585/admin/empresas/get', {
                method: "get"
            });
            let companies = await response.json()
            loadCompaniesToSelect(companies)
            loadCompaniesToSelectEdit(companies)
            
        }
        getCompanies();

        const loadCompaniesToSelect = (comps) => {
            document.getElementById('list-emp').innerHTML = '<option value="0" selected></option>'
            comps.forEach(e => {
                console.log(e.companyName);
                document.getElementById('list-emp').innerHTML += `
                <option value="${e.companyName}">${e.companyName}</option>
            `
            });
            
        }
        const loadCompaniesToSelectEdit = (comps) => {
            document.getElementById('list-emp2').innerHTML = '<option value="0" selected></option>'
            comps.forEach(e => {
                console.log(e.companyName);
                document.getElementById('list-emp2').innerHTML += `
                <option value="${e.companyName}">${e.companyName}</option>
            `
            });
            
        }
        const loadProductsAdmin = () => {
            const productsAdmin = document.getElementById('productsAdmin');
            
            let i = 1;
            productosArray.forEach(e => {
                productsAdmin.innerHTML += `
                <tr>
                        <td>${i}</td>
                        <td class="name">${e.productName}</td>
                        <td>${e.price}</td>
                        <td><a href="#">Abrir Imagen</a></td>
                        <td>${e.company}</td>
                        <td>${e.category}</td>
                        <td>${e.description}</td>
                        <td>
                            <div class="btncmp">
                                <button class="btn editbtn" data-toggle="modal" id="${e._id}" onclick="loadToIDPrd(this)" data-target="#staticBackdrop2">Editar</button>
                                
                                    <input class="btn delbtn" id="${e._id}" type="submit" onclick="deleteProductsAdmin(this)" value="Eliminar">
                                
                                
                            </div>
                        </td>
                    
                        
                      </tr>
                `
        
                i++;
            });
          }
        loadProductsAdmin()
        

  };
  //cargarProducts();
  //ELIMINAR PRODUCTOS DE ADMIN
  const deleteProductsAdmin = async (id) => {
    const respuesta = await fetch(('http://localhost:8585/admin/productos/' + id.id), {
        method: "delete",
        headers: {
            'Content-Type': 'application/json'
            },
    }).then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .then(window.location.reload());
    
  }
  //ELIMINAR MOTORISTAS 
 

  //cargar ordenes pedidas y disponibles
  const loadOrdersDisp = async () => {
    const respuesta = await fetch('http://localhost:8585/admin/ordenes/getDisp', {
        method: "get"
    });
    
    let data = await respuesta.json();
    let cont = document.getElementById('corps');
    //console.log(data);
    data.forEach(element => {
        document.getElementById("corp").innerHTML += `
        <div class="cardCorp gridCard">
                    <div class="card-body">
                        <h4 class="card-title">${element.productName}</h4>
                        <small>${element.company}</small>
                    </div>
                    <div class="OrderInfo">
                        <h1>Cantidad</h1> <span>${element.quantity}</span>
                    </div>
                            <dt>Pago Total</dt>
                            <dd>${element.totalOrder}</dd><br>
                        
                        <form>
                        <a  href="/motor/pedido-actual">
                        
                            <input type="button" class="btn btn_secondary gridBtn" id="${element._id}" onclick=" ordTook(this)" value="Tomar Pedido">
                        </a>   
                        </form>
                </div>`
    });
    if (data.length == 0) {
        document.getElementById("corp").innerHTML =" <center><h3>¡No hay Pedidos Disponibles!</h3></center>" 
    }
    
  } 

  const ordTook = async (id) => {
    console.log(id.id);
    const respuesta = await fetch(('http://localhost:8585/admin/ordenes/' + id.id), {
        method:"get"
    });
    
    let data = await respuesta.json()
    console.log(data);
    localStorage.setItem("order", JSON.stringify(data));
    removeData(id.id)
  }

  const removeData = async (id) => {
    const respuesta = await fetch(('http://localhost:8585/admin/ordenes/delOrders/' + id), {
        method: "delete",
        headers: {
            'Content-Type': 'application/json'
            },
    }).then(respuesta => respuesta.json())
    .then(data => console.log(data));
  } 

  

  
  