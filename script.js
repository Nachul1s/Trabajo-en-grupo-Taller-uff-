//Div contenedor
const contenedor = document.getElementById ("accordionContenedor") //tomo el div acordeon del HTML con el getElementById


//<------------------CAMPERAS------------------>
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
desplegarAcordion.setAttribute ("data-bs-target", "#collapseThree") //le agrego el id collapseTwo con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
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
desplegarAcordion2.setAttribute ("data-bs-target", "#collapseFour") //le agrego el id collapseTwo con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
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
desplegarAcordion3.setAttribute ("data-bs-target", "#collapseFive") //le agrego el id collapseTwo con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
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


//<------------------ACCESORIOS------------------>
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
desplegarAcordion4.setAttribute ("data-bs-target", "#collapseSix") //le agrego el id collapseTwo con el data-bs-target para especificar el id del acoredeon a despleguar usando un setAttribute
desplegarAcordion4.innerText = "Accesorios" //le doy el titulo al acordeon con el innerText
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
p_4.innerText = "Tenemos una coleccion limitada y exclusiva de accesorios (joyas, gorros, gorras, perfumes, etc.), con originalidad y calidad 100% aseguradas." //le inserto el contenido de texto al p con el innerText
const p2_4 = document.createElement ("p") //creo el segundo p con el createElement
const botonAccesorios = document.createElement ("button") //creo el boton para ver el producto con el createElement
botonAccesorios.classList.add ("btn") //le agrego la clase btn con el classList.add
botonAccesorios.classList.add ("btn-danger") //le agrego la clase btn-danger con el classList.add
botonAccesorios.type = "button" //le doy la propiedad de boton con el type = "button"
botonAccesorios.onclick = function () {window.open ("https://sitio.com", "_blank")} //le agrego la url vacia a la cual redirigirme con el onclick = function () {window.open ("url", "_blank")}
botonAccesorios.innerText = "Ver accesorios" //le inserto el contenido de texto con el innerText
//Insercion del body + header 4
p2_4.appendChild (botonAccesorios) //inserto el boton de redireccion al p2 con el appendChild
bodyAcordion4.append (p_4, p2_4) //inserto ambos p's al cuerpo del acordeon con el append (no appendChild, ya que el appendChild solo me permetiria insertar un objeto, en cambio el append me permite agregar los que yo quiera)
mainAcordion4.appendChild (bodyAcordion4) //inserto el cuerpo del acordeon a la estructura del acordeon con el appendChild
headerAcordion4.appendChild (desplegarAcordion4) // inserto el boton de despliegue del acordeon al header del acordeon con el appendChild
itemAcordion4.append (headerAcordion4, mainAcordion4) //inserto el header del acordeon y la estructura del acordeon al item del acordeon con el append


//Insercion al div
contenedor.append (itemAcordion, itemAcordion2, itemAcordion3, itemAcordion4) //inserto los items de los acordeones al div contenedor
