//Div contenedor
const contenedor = document.getElementById ("accordionContenedor") //tomo el div acordeon del HTML con el getElementById


//<------------------CAMPERAS------------------>

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

//esto tambien 
//Item
const itemAcordion = document.createElement ("div") //creo un div con el item del acordeon usando el createElement
itemAcordion.classList.add ("accordion-item") //le agrego la clase accordion-item con el classList.add
itemAcordion.classList.add ("w-50") //le agrego un width de 50% con la clase w-50 usando un classList.add 
itemAcordion.classList.add ("mt-2") //le agrego un margin top de 2px con la clase mt-2 usando un classList.add 
itemAcordion.classList.add ("mb-2") //le agrego un margin bottom de 2px con la clase mb-2 usando un classList.add 
itemAcordion.classList.add ("mx-2") //le agrego un margin left y right de 2px con la clase mx-2 usando un classList.add 
//Header
const headerAcordion = document.createElement ("h2") //creo el un h2 con el header del acordeon usando el createElement
headerAcordion.classList.add ("accordion-header") //le agrego la clase accordion-header con el classList.add
const desplegarAcordion = document.createElement ("button") //creo el button con el despliegue del acordeon usando el createElement
desplegarAcordion.classList.add ("accordion-button") //le agrego la clase accordion-button con el classList.add para el despliegue el acordeon con el click
desplegarAcordion.classList.add ("collapsed") //le agrego la clase collapsed con el classList.add para que se despliegue el acordeon
desplegarAcordion.type = "button" //le doy la propiedad de boton al despliegue del acordeon con el type = "button"
desplegarAcordion.setAttribute ("data-bs-toggle", "collapse") //le agrego el atributo collapse con el data-bs-toggle para desplegar el acordeon usando un setAttribute 
desplegarAcordion.setAttribute ("data-bs-target", "#collapseThree") //le agrego el id collapseThree con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
desplegarAcordion.innerText = "Camperas" //le doy el titulo al acordeon con el innerText
//Main
const mainAcordion = document.createElement ("div") //creo un div main con el createElement
mainAcordion.id = "collapseThree" //le doy la ID al main con el id = "collapseThree"
mainAcordion.classList.add ("accordion-collapse")  //le agrego la clase accordion-collapse con el classList.add
mainAcordion.classList.add ("collapse") // le agrego la clase collapse con el classList.add
mainAcordion.setAttribute ("data-bs-parent", "#accordionContenedor") //lo emparento con el id accordionExample con el data-bs-parent para que especificar el div al que pertenece
//Body
const bodyAcordion = document.createElement ("div")// creo el div inner con el createElement
bodyAcordion.classList.add("accordion-body") //le agrego la clase accordion-body con classList.add
const p = document.createElement ("p") //creo el p con el createElement
p.innerText = "Tenemos todo tipo de camperas, de cualquier marca y material de tu preferencia, con originalidad y calidad 100% aseguradas." //le inserto el contenido de texto al p con el innerText
const p2 = document.createElement ("p") //creo el segundo p con el createElement
const botonCamperas = document.createElement ("button") //creo el boton para ver el producto con el createElement
botonCamperas.classList.add ("btn") //le agrego la clase btn con el classList.add
botonCamperas.classList.add ("btn-danger") //le agrego la clase btn-danger con el classList.add
botonCamperas.type = "button" //le doy la propiedad de boton con el type = "button"
botonCamperas.onclick = function () {window.open ("https://sitio.com", "_blank")} //le agrego la url vacia a la cual redirigirme con el onclick = function () {window.open ("url", "_blank")}
botonCamperas.innerText = "Ver camperas" //le inserto el contenido de texto con el innerText
//Insercion del body + header
p2.appendChild (botonCamperas) //inserto el boton de redireccion al p2 con el appendChild
bodyAcordion.append (p, p2) //inserto ambos p's al cuerpo del acordeon con el append (no appendChild, ya que el appendChild solo me permetiria insertar un objeto, en cambio el append me permite agregar los que yo quiera)
mainAcordion.appendChild (bodyAcordion) //inserto el cuerpo del acordeon a la estructura del acordeon con el appendChild
headerAcordion.appendChild (desplegarAcordion) // inserto el boton de despliegue del acordeon al header del acordeon con el appendChild
itemAcordion.append (headerAcordion, mainAcordion) //inserto el header del acordeon y la estructura del acordeon al item del acordeon con el append


//<------------------BUZOS------------------>
//Item 2
const itemAcordion2 = document.createElement ("div") //creo un div con el item del acordeon usando el createElement
itemAcordion2.classList.add ("accordion-item") //le agrego la clase accordion-item con el classList.add
itemAcordion2.classList.add ("w-50") //le agrego un width de 50% con la clase w-50 usando un classList.add 
itemAcordion2.classList.add ("mt-2") //le agrego un margin top de 2px con la clase mt-2 usando un classList.add 
itemAcordion2.classList.add ("mb-2") //le agrego un margin bottom de 2px con la clase mb-2 usando un classList.add 
itemAcordion2.classList.add ("mx-2") //le agrego un margin left y right de 2px con la clase mx-2 usando un classList.add 
//Header 2
const headerAcordion2 = document.createElement ("h2") //creo el un h2 con el header del acordeon usando el createElement
headerAcordion2.classList.add ("accordion-header") //le agrego la clase accordion-header con el classList.add
const desplegarAcordion2 = document.createElement ("button") //creo el button con el despliegue del acordeon usando el createElement
desplegarAcordion2.classList.add ("accordion-button") //le agrego la clase accordion-button con el classList.add para el despliegue el acordeon con el click
desplegarAcordion2.classList.add ("collapsed") //le agrego la clase collapsed con el classList.add para que se despliegue el acordeon
desplegarAcordion2.type = "button" //le doy la propiedad de boton al despliegue del acordeon con el type = "button"
desplegarAcordion2.setAttribute ("data-bs-toggle", "collapse") //le agrego el atributo collapse con el data-bs-toggle para desplegar el acordeon usando un setAttribute 
desplegarAcordion2.setAttribute ("data-bs-target", "#collapseFour") //le agrego el id collapseFour con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
desplegarAcordion2.innerText = "Buzos" //le doy el titulo al acordeon con el innerText
//Main 2
const mainAcordion2 = document.createElement ("div") //creo un div main con el createElement
mainAcordion2.id = "collapseFour" //le doy la ID al main con el id = "collapseThree"
mainAcordion2.classList.add ("accordion-collapse")  //le agrego la clase accordion-collapse con el classList.add
mainAcordion2.classList.add ("collapse") // le agrego la clase collapse con el classList.add
mainAcordion2.setAttribute ("data-bs-parent", "#accordionContenedor") //lo emparento con el id accordionExample con el data-bs-parent para que especificar el div al que pertenece
//Body 2
const bodyAcordion2 = document.createElement ("div")// creo el div inner con el createElement
bodyAcordion2.classList.add("accordion-body") //le agrego la clase accordion-body con classList.add
const p_2 = document.createElement ("p") //creo el p con el createElement
p_2.innerText = "Tenemos todo tipo de buzos, de cualquier marca y material de tu preferencia, con originalidad y calidad 100% aseguradas." //le inserto el contenido de texto al p con el innerText
const p2_2 = document.createElement ("p") //creo el segundo p con el createElement
const botonBuzos = document.createElement ("button") //creo el boton para ver el producto con el createElement
botonBuzos.classList.add ("btn") //le agrego la clase btn con el classList.add
botonBuzos.classList.add ("btn-danger") //le agrego la clase btn-danger con el classList.add
botonBuzos.type = "button" //le doy la propiedad de boton con el type = "button"
botonBuzos.onclick = function () {window.open ("https://sitio.com", "_blank")} //le agrego la url vacia a la cual redirigirme con el onclick = function () {window.open ("url", "_blank")}
botonBuzos.innerText = "Ver buzos" //le inserto el contenido de texto con el innerText
//Insercion del body + header 2
p2_2.appendChild (botonBuzos) //inserto el boton de redireccion al p2 con el appendChild
bodyAcordion2.append (p_2, p2_2) //inserto ambos p's al cuerpo del acordeon con el append (no appendChild, ya que el appendChild solo me permetiria insertar un objeto, en cambio el append me permite agregar los que yo quiera)
mainAcordion2.appendChild (bodyAcordion2) //inserto el cuerpo del acordeon a la estructura del acordeon con el appendChild
headerAcordion2.appendChild (desplegarAcordion2) // inserto el boton de despliegue del acordeon al header del acordeon con el appendChild
itemAcordion2.append (headerAcordion2, mainAcordion2) //inserto el header del acordeon y la estructura del acordeon al item del acordeon con el append


//<------------------ZAPATILLAS------------------>
//Item 3
const itemAcordion3 = document.createElement ("div") //creo un div con el item del acordeon usando el createElement
itemAcordion3.classList.add ("accordion-item") //le agrego la clase accordion-item con el classList.add
itemAcordion3.classList.add ("w-50") //le agrego un width de 50% con la clase w-50 usando un classList.add 
itemAcordion3.classList.add ("mt-2") //le agrego un margin top de 2px con la clase mt-2 usando un classList.add 
itemAcordion3.classList.add ("mb-2") //le agrego un margin bottom de 2px con la clase mb-2 usando un classList.add 
itemAcordion3.classList.add ("mx-2") //le agrego un margin left y right de 2px con la clase mx-2 usando un classList.add 
//Header 3
const headerAcordion3 = document.createElement ("h2") //creo el un h2 con el header del acordeon usando el createElement
headerAcordion3.classList.add ("accordion-header") //le agrego la clase accordion-header con el classList.add
const desplegarAcordion3 = document.createElement ("button") //creo el button con el despliegue del acordeon usando el createElement
desplegarAcordion3.classList.add ("accordion-button") //le agrego la clase accordion-button con el classList.add para el despliegue el acordeon con el click
desplegarAcordion3.classList.add ("collapsed") //le agrego la clase collapsed con el classList.add para que se despliegue el acordeon
desplegarAcordion3.type = "button" //le doy la propiedad de boton al despliegue del acordeon con el type = "button"
desplegarAcordion3.setAttribute ("data-bs-toggle", "collapse") //le agrego el atributo collapse con el data-bs-toggle para desplegar el acordeon usando un setAttribute 
desplegarAcordion3.setAttribute ("data-bs-target", "#collapseFive") //le agrego el id collapseFive con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
desplegarAcordion3.innerText = "Zapatillas" //le doy el titulo al acordeon con el innerText
//Main 3
const mainAcordion3 = document.createElement ("div") //creo un div main con el createElement
mainAcordion3.id = "collapseFive" //le doy la ID al main con el id = "collapseThree"
mainAcordion3.classList.add ("accordion-collapse")  //le agrego la clase accordion-collapse con el classList.add
mainAcordion3.classList.add ("collapse") // le agrego la clase collapse con el classList.add
mainAcordion3.setAttribute ("data-bs-parent", "#accordionContenedor") //lo emparento con el id accordionExample con el data-bs-parent para que especificar el div al que pertenece
//Body 3
const bodyAcordion3 = document.createElement ("div")// creo el div inner con el createElement
bodyAcordion3.classList.add("accordion-body") //le agrego la clase accordion-body con classList.add
const p_3 = document.createElement ("p") //creo el p con el createElement
p_3.innerText = "Tenemos todo tipo de zapatillas, de cualquier marca y material de tu preferencia, con originalidad y calidad 100% aseguradas." //le inserto el contenido de texto al p con el innerText
const p2_3 = document.createElement ("p") //creo el segundo p con el createElement
const botonZapatillas = document.createElement ("button") //creo el boton para ver el producto con el createElement
botonZapatillas.classList.add ("btn") //le agrego la clase btn con el classList.add
botonZapatillas.classList.add ("btn-danger") //le agrego la clase btn-danger con el classList.add
botonZapatillas.type = "button" //le doy la propiedad de boton con el type = "button"
botonZapatillas.onclick = function () {window.open ("https://sitio.com", "_blank")} //le agrego la url vacia a la cual redirigirme con el onclick = function () {window.open ("url", "_blank")}
botonZapatillas.innerText = "Ver zapatillas" //le inserto el contenido de texto con el innerText
//Insercion del body + header 3
p2_3.appendChild (botonZapatillas) //inserto el boton de redireccion al p2 con el appendChild
bodyAcordion3.append (p_3, p2_3) //inserto ambos p's al cuerpo del acordeon con el append (no appendChild, ya que el appendChild solo me permetiria insertar un objeto, en cambio el append me permite agregar los que yo quiera)
mainAcordion3.appendChild (bodyAcordion3) //inserto el cuerpo del acordeon a la estructura del acordeon con el appendChild
headerAcordion3.appendChild (desplegarAcordion3) // inserto el boton de despliegue del acordeon al header del acordeon con el appendChild
itemAcordion3.append (headerAcordion3, mainAcordion3) //inserto el header del acordeon y la estructura del acordeon al item del acordeon con el append


//<------------------GORRAS------------------>
//Item 4
const itemAcordion4 = document.createElement ("div") //creo un div con el item del acordeon usando el createElement
itemAcordion4.classList.add ("accordion-item") //le agrego la clase accordion-item con el classList.add
itemAcordion4.classList.add ("w-50") //le agrego un width de 50% con la clase w-50 usando un classList.add 
itemAcordion4.classList.add ("mt-2") //le agrego un margin top de 2px con la clase mt-2 usando un classList.add 
itemAcordion4.classList.add ("mb-2") //le agrego un margin bottom de 2px con la clase mb-2 usando un classList.add 
itemAcordion4.classList.add ("mx-2") //le agrego un margin left y right de 2px con la clase mx-2 usando un classList.add 
//Header 4
const headerAcordion4 = document.createElement ("h2") //creo el un h2 con el header del acordeon usando el createElement
headerAcordion4.classList.add ("accordion-header") //le agrego la clase accordion-header con el classList.add
const desplegarAcordion4 = document.createElement ("button") //creo el button con el despliegue del acordeon usando el createElement
desplegarAcordion4.classList.add ("accordion-button") //le agrego la clase accordion-button con el classList.add para el despliegue el acordeon con el click
desplegarAcordion4.classList.add ("collapsed") //le agrego la clase collapsed con el classList.add para que se despliegue el acordeon
desplegarAcordion4.type = "button" //le doy la propiedad de boton al despliegue del acordeon con el type = "button"
desplegarAcordion4.setAttribute ("data-bs-toggle", "collapse") //le agrego el atributo collapse con el data-bs-toggle para desplegar el acordeon usando un setAttribute 
desplegarAcordion4.setAttribute ("data-bs-target", "#collapseSix") //le agrego el id collapseSix con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
desplegarAcordion4.innerText = "Gorras" //le doy el titulo al acordeon con el innerText
//Main 4
const mainAcordion4 = document.createElement ("div") //creo un div main con el createElement
mainAcordion4.id = "collapseSix" //le doy la ID al main con el id = "collapseThree"
mainAcordion4.classList.add ("accordion-collapse")  //le agrego la clase accordion-collapse con el classList.add
mainAcordion4.classList.add ("collapse") // le agrego la clase collapse con el classList.add
mainAcordion4.setAttribute ("data-bs-parent", "#accordionContenedor") //lo emparento con el id accordionExample con el data-bs-parent para que especificar el div al que pertenece
//Body 4
const bodyAcordion4 = document.createElement ("div")// creo el div inner con el createElement
bodyAcordion4.classList.add("accordion-body") //le agrego la clase accordion-body con classList.add
const p_4 = document.createElement ("p") //creo el p con el createElement
p_4.innerText = "Tenemos todo tipo de gorras, de cualquier marca y material de tu preferencia, con originalidad y calidad 100% aseguradas." //le inserto el contenido de texto al p con el innerText
const p2_4 = document.createElement ("p") //creo el segundo p con el createElement
const botonAccesorios = document.createElement ("button") //creo el boton para ver el producto con el createElement
botonAccesorios.classList.add ("btn") //le agrego la clase btn con el classList.add
botonAccesorios.classList.add ("btn-danger") //le agrego la clase btn-danger con el classList.add
botonAccesorios.type = "button" //le doy la propiedad de boton con el type = "button"
botonAccesorios.onclick = function () {window.open ("https://sitio.com", "_blank")} //le agrego la url vacia a la cual redirigirme con el onclick = function () {window.open ("url", "_blank")}
botonAccesorios.innerText = "Ver gorras" //le inserto el contenido de texto con el innerText
//Insercion del body + header 4
p2_4.appendChild (botonAccesorios) //inserto el boton de redireccion al p2 con el appendChild
bodyAcordion4.append (p_4, p2_4) //inserto ambos p's al cuerpo del acordeon con el append (no appendChild, ya que el appendChild solo me permetiria insertar un objeto, en cambio el append me permite agregar los que yo quiera)
mainAcordion4.appendChild (bodyAcordion4) //inserto el cuerpo del acordeon a la estructura del acordeon con el appendChild
headerAcordion4.appendChild (desplegarAcordion4) // inserto el boton de despliegue del acordeon al header del acordeon con el appendChild
itemAcordion4.append (headerAcordion4, mainAcordion4) //inserto el header del acordeon y la estructura del acordeon al item del acordeon con el append


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
class Indumentaria {
  constructor(precio, id, stock, titulo, descripcion, img, tipo) {
    this.precio = precio;
    this.id = id;
    this.stock = stock;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.tipo = tipo;
  }
}

let prendas = [
  new Indumentaria(27000, 1, 12, "Remeras Mangas cortas", "$20.500 solo EFECTIVO", "Remera"),
  new Indumentaria(18000, 2, 15, "Remera Jordan", "$12.000 solo EFECTIVO", "Remera"),
  new Indumentaria(18000, 3, 17, "Remera Jordan Flight", "$16.500 solo EFECTIVO", "Remera"),
  new Indumentaria(37000, 4, 6, "Campera Nike Tech Comb", "$25.500 solo EFECTIVO", "Campera"),
  new Indumentaria(48000, 5, 7, "Campera Puma Ferrari", "$36.000 solo EFECTIVO", "Campera"),
  new Indumentaria(48000, 6, 10, "Campera Puma Mercedes Benz", "$36.000 solo EFECTIVO", "Campera"),
  new Indumentaria(30000, 7, 24, "Buzo Corteiz", "$28.500 solo EFECTIVO", "Buzo"),
  new Indumentaria(270000, 8, 5, "Zapatillas Jordan Retro 11", "$165.000 solo EFECTIVO", "Zapatilla"),
  new Indumentaria(70000, 9, 18, "Gorra Jordan Chapita", "$67.000 solo EFECTIVO", "Gorra")
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
button.classList.add("btn-comprar")
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
button2.classList.add("btn-comprar")
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
button3.classList.add("btn-comprar")

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
button4.classList.add("btn-comprar")

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
button5.classList.add("btn-comprar")

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
button6.classList.add("btn-comprar")

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
button7.classList.add("btn-comprar")

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
button8.classList.add("btn-comprar")
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
button9.classList.add("btn-comprar")
cardBody9.appendChild(button9)

col9.appendChild(card9)

let table = document.querySelector("#tablaranking")


let tr1 = document.createElement("tr")
let th1 = document.createElement("th")
th1.scope = "row"
th1.textContent = "1"
let td1=document.createElement("td")
td1.textContent="Remeras Mangas cortas"
let td2=document.createElement("td")
td2.appendChild(imagen8)
td2.style.width = "100px"
let td3=document.createElement("td")
td3.textContent="27.000"
tr1.append(th1,td1,td2,td3)



let tr2 = document.createElement("tr")
let th2 = document.createElement("th")
th2.scope = "row"
th2.textContent = "1"
let td11=document.createElement("td")
td11.textContent="Remeras Mangas cortas"
let td22=document.createElement("td")
td22.appendChild(imagen9)
td22.style.width = "100px"
let td33=document.createElement("td")
td33.textContent="27.000"
tr2.append(th2,td11,td22,td33)


table.append(tr1,tr2)

//Insercion al div
contenedor.append (itemAcordion, itemAcordion2, itemAcordion3, itemAcordion4) //inserto los items de los acordeones al div contenedor
