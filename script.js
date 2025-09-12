class Producto {
  constructor(id, nombre, marca, img, descripcion, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.img = img;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
  }
}


class Persona {
  constructor(id, nombre, apellido, dni, edad, direccion) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.direccion = direccion;
    this.productos = [];
  }

  agregarProductos(producto) {
    this.productos.push(producto);
  }

  eliminarProducto(producto) {
    const index = this.productos.findIndex((prod) => prod === producto);
    if (index === -1) {
      return `error 404`;
    } else {
      let confirmar = confirm(`desea eliminar el producto?`);
      if (confirmar) {
        this.productos.splice(index, 1);
        return `se elimino producto`;
      } else {
        return `accion cancelada`;
      }
    }
  }

  calculo() {
    let precioTotal = 0
    this.productos.forEach(prod => {
      precioTotal = precioTotal + prod.precio

    })
    return precioTotal
  }

  reset() {
    this.productos = [];
  }

  datos() {
    return `id:${this.id}, nombre:${this.nombre}, apellido: ${this.apellido}, dni:${this.dni}, edad:${this.edad}, direccion:${this.direccion}`;
  }
}

const prod1 = new Producto(1, "camisa", "nike", "https://http2.mlstatic.com/D_NQ_NP_2X_661329-MLA49700066534_042022-F.webp", "camisa deportiva", 15000, 10)
const prod2 = new Producto(2, "pantalon", "adidas", "https://http2.mlstatic.com/D_NQ_NP_2X_661329-MLA49700066534_042022-F.webp", "pantalon deportivo", 20000, 5)



let persona1 = new Persona(
  19,
  "Jeremias",
  "Villarruel",
  "48616706",
  17,
  "Veneco 1512"
);
let row = document.querySelector("#rowTarjeta")

//esto lo voy a borrar
let boton = document.querySelector("#button")
// boton.textContent = "Enviar"
boton.style.backgroundColor = "blue"
boton.style.color = "White"
row.appendChild(boton)

boton.addEventListener("click", function () {
  persona1.agregarProductos(prod1);
  mostrar();
});
//esto tambien 


function mostrar() {
  if (subtotal.innerHTML !== 0) {
    subtotal.innerHTML = 0
  }
  if (tbody.innerHTML !== "") {
    tbody.innerHTML = "";
  }

  persona1.productos.forEach((x) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = x.id;

    const td2 = document.createElement("td");
    td2.textContent = x.nombre;

    const td3 = document.createElement("td");
    td3.textContent = x.marca;

    const td4 = document.createElement("td");
    td4.textContent = x.descripcion;

    const td5 = document.createElement("td");
    td5.textContent = x.precio;

    const td6 = document.createElement("td");
    td6.textContent = x.stock;
    td6.classList.add("text-danger")

    const td7 = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn");
    botonEliminar.classList.add("btn-danger");
    botonEliminar.textContent = "delete";
    botonEliminar.addEventListener("click", function () {
      persona1.eliminarProducto(x);
      mostrar();
    });
    /*  let boton = document.createElement("button")
     boton.textContent="Enviar"
     boton.style.backgroundColor="blue"
     boton.style.color="White"
     row.appendChild(boton)
     
     boton.addEventListener("click", function () {
       persona1.agregarProductos(prod1);
       mostrar();
     }); */
     // esto lo voy a usar  cuando marroc termine

    td7.appendChild(botonEliminar);

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    tbody.appendChild(tr);

    // total.textContent = `total a pagar: $${persona1.calculo()}`

  });
}
let tbody = document.querySelector("#tbody");
/* let total = document.querySelector("#total");
let subtotal = document.querySelector("#subtotal");         */
class Indumentaria{ 
    constructor(precio,id,stock,titulo,descripcion,img,tipo) {
        this.precio = precio;
        this.id = id;
        this.stock = stock;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tipo = tipo;
    }
}

let prendas = [
    new Indumentaria(27000,1,12,"Remeras Mangas cortas","$20.500 solo EFECTIVO","Remera"),
    new Indumentaria(18000,2,15,"Remera Jordan","$12.000 solo EFECTIVO","Remera"),
    new Indumentaria(18000,3,17,"Remera Jordan Flight","$16.500 solo EFECTIVO","Remera"),
    new Indumentaria(37000,4,6,"Campera Nike Tech Comb","$25.500 solo EFECTIVO","Campera"),
    new Indumentaria(48000,5,7,"Campera Puma Ferrari","$36.000 solo EFECTIVO","Campera"),
    new Indumentaria(48000,6,10,"Campera Puma Mercedes Benz","$36.000 solo EFECTIVO","Campera"),
    new Indumentaria(30000,7,24,"Buzo Corteiz","$28.500 solo EFECTIVO","Buzo"),
    new Indumentaria(270000,8,5,"Zapatillas Jordan Retro 11","$165.000 solo EFECTIVO","Zapatilla"),
    new Indumentaria(70000,9,18,"Gorra Jordan Chapita","$67.000 solo EFECTIVO","Gorra")
]

// Tarjetas 
 // --------------------------------------------------------------------------------------------//
let contenedor = document.getElementById("contenedor")

let col1 = document.createElement("div")
col1.classList.add("col")

let card = document.createElement("div")
card.classList.add("card")
card.style.width = "250px"

let imagen = document.createElement("img")
imagen.src = ("./remera hugo boss.png")
imagen.classList.add("card-img-top")
imagen.alt = "Remeras Mangas cortas"
card.appendChild(imagen)

let cardBody = document.createElement("div")
cardBody.classList.add("card-body")
card.appendChild(cardBody)


let titulo = document.createElement("h5")
titulo.classList.add("card-title")
titulo.textContent = "Remeras Hugo Boss"
cardBody.appendChild(titulo)

let precio = document.createElement("h5")
precio.classList.add("card-title")
precio.textContent = "$27.000"
cardBody.appendChild(precio)

let parrafo = document.createElement("p")
parrafo.classList.add("card-text")
parrafo.textContent = "$20.500 solo EFECTIVO"
cardBody.appendChild(parrafo)

let button = document.createElement("button")
button.classList.add("btn")
button.classList.add("btn-primary")
button.textContent = "Agregar producto"

cardBody.appendChild(button)

col1.appendChild(card)

// Remera 2

let col2 = document.createElement("div")
col2.classList.add("col")

let card2 = document.createElement("div")
card2.classList.add("card")
card2.style.width = "250px"

let imagen2 = document.createElement("img")
imagen2.src = ("https://dcdn-us.mitiendanube.com/stores/004/007/788/products/8734a40a-d12a-4810-b1e1-8825f3bb0503-9618eb55c1bbccb89717475057536861-1024-1024.webp")
imagen2.classList.add("card-img-top")
imagen2.alt = "Remera Jordan Tempo"
card2.appendChild(imagen2)

let cardBody2 = document.createElement("div")
cardBody2.classList.add("card-body")
card2.appendChild(cardBody2)


let titulo2 = document.createElement("h5")
titulo2.classList.add("card-title")
titulo2.textContent = "Remera Jordan"
cardBody2.appendChild(titulo2)

let precio2 = document.createElement("h5")
precio2.classList.add("card-title")
precio2.textContent = "$18.000"
cardBody2.appendChild(precio2)

let parrafo2 = document.createElement("p")
parrafo2.classList.add("card-text")
parrafo2.textContent = "$12.000 solo EFECTIVO"
cardBody2.appendChild(parrafo2)

let button2 = document.createElement("button")
button2.classList.add("btn")
button2.classList.add("btn-primary")
button2.textContent = "Agregar producto"

cardBody2.appendChild(button2)

col2.appendChild(card2)

// Remera 3

let col3 = document.createElement("div")
col3.classList.add("col")

let card3 = document.createElement("div")
card3.classList.add("card")
card3.style.width = "250px"

let imagen3 = document.createElement("img")
imagen3.src = ("https://dcdn-us.mitiendanube.com/stores/004/007/788/products/77bde2f0-28bb-4d74-9af6-0b2f62752ec3-0eccd253d30a14d82b17569525305601-640-0.webp")
imagen3.classList.add("card-img-top")
imagen3.alt = "Remeras Mangas cortas"
card3.appendChild(imagen3)

let cardBody3 = document.createElement("div")
cardBody3.classList.add("card-body")
card3.appendChild(cardBody3)


let titulo3 = document.createElement("h5")
titulo3.classList.add("card-title")
titulo3.textContent = "Remera Jordan Flight"
cardBody3.appendChild(titulo3)

let precio3 = document.createElement("h5")
precio3.classList.add("card-title")
precio3.textContent = "$18.000"
cardBody3.appendChild(precio3)

let parrafo3 = document.createElement("p")
parrafo3.classList.add("card-text")
parrafo3.textContent = "$16.500 solo EFECTIVO"
cardBody3.appendChild(parrafo3)

let button3 = document.createElement("button")
button3.classList.add("btn")
button3.classList.add("btn-primary")
button3.textContent = "Agregar producto"

cardBody3.appendChild(button3)

col3.appendChild(card3)

// Campera 1

let col4 = document.createElement("div")
col4.classList.add("col")


let card4 = document.createElement("div")
card4.classList.add("card")
card4.style.width = "250px"

let imagen4 = document.createElement("img")
imagen4.src = ("https://dcdn-us.mitiendanube.com/stores/004/007/788/products/img_1755-f4e1884e7d546f6f1517464699392277-1024-1024.webp")
imagen4.classList.add("card-img-top")
imagen4.alt = "Camperas de Algodón"
card4.appendChild(imagen4)

let cardBody4 = document.createElement("div")
cardBody4.classList.add("card-body")
card4.appendChild(cardBody4)


let titulo4 = document.createElement("h5")
titulo4.classList.add("card-title")
titulo4.textContent = "Campera Nike Tech Comb"
cardBody4.appendChild(titulo4)

let precio4 = document.createElement("h5")
precio4.classList.add("card-title")
precio4.textContent = "$37.000"
cardBody4.appendChild(precio4)

let parrafo4 = document.createElement("p")
parrafo4.classList.add("card-text")
parrafo4.textContent = "$25.500 solo EFECTIVO"
cardBody4.appendChild(parrafo4)

let button4 = document.createElement("button")
button4.classList.add("btn")
button4.classList.add("btn-primary")
button4.textContent = "Agregar producto"

cardBody4.appendChild(button4)

col4.appendChild(card4)

// Campera 2


let col5 = document.createElement("div")
col5.classList.add("col")


let card5 = document.createElement("div")
card5.classList.add("card")
card5.style.width = "250px"

let imagen5 = document.createElement("img")
imagen5.src = ("https://dcdn-us.mitiendanube.com/stores/004/007/788/products/addc7c62-0f54-451c-965b-7ad87344d710-22f9b2b01fd199160417273894475944-480-0.webp")
imagen5.classList.add("card-img-top")
imagen5.alt = "Campera Ferrari"
card5.appendChild(imagen5)

let cardBody5 = document.createElement("div")
cardBody5.classList.add("card-body")
card5.appendChild(cardBody5)


let titulo5 = document.createElement("h5")
titulo5.classList.add("card-title")
titulo5.textContent = "Campera Puma Ferrari"
cardBody5.appendChild(titulo5)

let precio5 = document.createElement("h5")
precio5.classList.add("card-title")
precio5.textContent = "$48.000"
cardBody5.appendChild(precio5)

let parrafo5 = document.createElement("p")
parrafo5.classList.add("card-text")
parrafo5.textContent = "$36.000 solo EFECTIVO"
cardBody5.appendChild(parrafo5)

let button5 = document.createElement("button")
button5.classList.add("btn")
button5.classList.add("btn-primary")
button5.textContent = "Agregar producto"

cardBody5.appendChild(button5)

col5.appendChild(card5)

// Campera 3

let col6 = document.createElement("div")
col6.classList.add("col")

let card6 = document.createElement("div")
card6.classList.add("card")
card6.style.width = "250px"

let imagen6 = document.createElement("img")
imagen6.src = ("https://dcdn-us.mitiendanube.com/stores/004/007/788/products/f531d07f-566e-4ec8-bf13-573b5e913de9-40019284247df4225e17442429098850-1024-1024.webp")
imagen6.classList.add("card-img-top")
imagen6.alt = "Remeras Mangas cortas"
card6.appendChild(imagen6)

let cardBody6 = document.createElement("div")
cardBody6.classList.add("card-body")
card6.appendChild(cardBody6)


let titulo6 = document.createElement("h5")
titulo6.classList.add("card-title")
titulo6.textContent = "Campera Puma Mercedes Benz"
cardBody6.appendChild(titulo6)

let precio6 = document.createElement("h5")
precio6.classList.add("card-title")
precio6.textContent = "$48.000"
cardBody6.appendChild(precio6)

let parrafo6 = document.createElement("p")
parrafo6.classList.add("card-text")
parrafo6.textContent = "$37.000 solo EFECTIVO"
cardBody6.appendChild(parrafo6)

let button6 = document.createElement("button")
button6.classList.add("btn")
button6.classList.add("btn-primary")
button6.textContent = "Agregar producto"

cardBody6.appendChild(button6)

col6.appendChild(card6)

// Buzo 1

let col7 = document.createElement("div")
col7.classList.add("col")

let card7 = document.createElement("div")
card7.classList.add("card")
card7.style.width = "250px"

let imagen7 = document.createElement("img")
imagen7.src = ("https://dcdn-us.mitiendanube.com/stores/004/007/788/products/img_7619-17c093194e9367e73617519175636372-1024-1024.webp")
imagen7.classList.add("card-img-top")
imagen7.alt = "Remeras Mangas cortas"
card7.appendChild(imagen7)

let cardBody7 = document.createElement("div")
cardBody7.classList.add("card-body")
card7.appendChild(cardBody7)


let titulo7 = document.createElement("h5")
titulo7.classList.add("card-title")
titulo7.textContent = "Buzo Corteiz"
cardBody7.appendChild(titulo7)

let precio7 = document.createElement("h5")
precio7.classList.add("card-title")
precio7.textContent = "$30.000"
cardBody7.appendChild(precio7)

let parrafo7 = document.createElement("p")
parrafo7.classList.add("card-text")
parrafo7.textContent = "$28.500 solo EFECTIVO"
cardBody7.appendChild(parrafo7)

let button7 = document.createElement("button")
button7.classList.add("btn")
button7.classList.add("btn-primary")
button7.textContent = "Agregar producto"

cardBody7.appendChild(button7)

col7.appendChild(card7)

// Zapatilla 1

let col8 = document.createElement("div")
col8.classList.add("col")

let card8 = document.createElement("div")
card8.classList.add("card")
card8.style.width = "250px"

let imagen8 = document.createElement("img")
imagen8.src = ("https://sneakersimport.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-12-at-19.28.27-2.jpeg")
imagen8.classList.add("card-img-top")
imagen8.alt = "Remeras Mangas cortas"
card8.appendChild(imagen8)

let cardBody8 = document.createElement("div")
cardBody8.classList.add("card-body")
card8.appendChild(cardBody8)


let titulo8 = document.createElement("h5")
titulo8.classList.add("card-title")
titulo8.textContent = "Zapatillas Jordan Retro 11"
cardBody8.appendChild(titulo8)

let precio8 = document.createElement("h5")
precio8.classList.add("card-title")
precio8.textContent = "$270.000"
cardBody8.appendChild(precio8)

let parrafo8 = document.createElement("p")
parrafo8.classList.add("card-text")
parrafo8.textContent = "$265.000 solo EFECTIVO"
cardBody8.appendChild(parrafo8)

let button8 = document.createElement("button")
button8.classList.add("btn")
button8.classList.add("btn-primary")
button8.textContent = "Agregar producto"

cardBody8.appendChild(button8)

col8.appendChild(card8)

// Gorra 1

let col9 = document.createElement("div")
col9.classList.add("col")

let card9 = document.createElement("div")
card9.classList.add("card")
card9.style.width = "250px"

let imagen9 = document.createElement("img")
imagen9.src = ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVCpgpBqmG83IkNpKQ_Ws0ie0mnyAdL9bpA&s")
imagen9.classList.add("card-img-top")
imagen9.alt = "Gorra Jordan Chapita"
card9.appendChild(imagen9)

let cardBody9 = document.createElement("div")
cardBody9.classList.add("card-body")
card9.appendChild(cardBody9)


let titulo9 = document.createElement("h5")
titulo9.classList.add("card-title")
titulo9.textContent = "Gorra Jordan Chapita"
cardBody9.appendChild(titulo9)

let precio9 = document.createElement("h5")
precio9.classList.add("card-title")
precio9.textContent = "$70.000"
cardBody9.appendChild(precio9)

let parrafo9 = document.createElement("p")
parrafo9.classList.add("card-text")
parrafo9.textContent = "$67.000 solo EFECTIVO"
cardBody9.appendChild(parrafo9)

let button9 = document.createElement("button")
button9.classList.add("btn")
button9.classList.add("btn-primary")
button9.textContent = "Agregar producto"

cardBody9.appendChild(button9)

col9.appendChild(card9)

contenedor.append(col1,col2,col3,col4,col5,col6,col7,col8,col9)
