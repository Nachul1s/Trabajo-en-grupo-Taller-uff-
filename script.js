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
titulo.textContent = "Remeras Manga Corta"
cardBody.appendChild(titulo)

let parrafo = document.createElement("p")
parrafo.classList.add("card-text")
parrafo.textContent = "Remeras de manga de corta desde el S al XXL, de todas las marcas"
cardBody.appendChild(parrafo)

let button = document.createElement("button")
button.classList.add("btn")
button.classList.add("btn-primary")
button.textContent = "Ver Todo en Remeras"

cardBody.appendChild(button)

col1.appendChild(card)

// Tarjeta Camperas

let col2 = document.createElement("div")
col2.classList.add("col")


let card2 = document.createElement("div")
card2.classList.add("card")
card2.style.width = "250px"

let imagen2 = document.createElement("img")
imagen2.src = ("./campera nike tech.png")
imagen2.classList.add("card-img-top")
imagen2.alt = "Camperas de Algodón"
card2.appendChild(imagen2)

let cardBody2 = document.createElement("div")
cardBody2.classList.add("card-body")
card2.appendChild(cardBody2)


let titulo2 = document.createElement("h5")
titulo2.classList.add("card-title")
titulo2.textContent = "Camperas de Algodón"
cardBody2.appendChild(titulo2)

let parrafo2 = document.createElement("p")
parrafo2.classList.add("card-text")
parrafo2.textContent = "Camperas de algodón desde el S al XXL, marca Nike y Puma"
cardBody2.appendChild(parrafo2)

let button2 = document.createElement("button")
button2.classList.add("btn")
button2.classList.add("btn-primary")
button2.textContent = "Ver Todo en Camperas"

cardBody2.appendChild(button2)

col2.appendChild(card2)

//Buzos

let col3 = document.createElement("div")
col3.classList.add("col")


let card3 = document.createElement("div")
card3.classList.add("card")
card3.style.width = "250px"

let imagen3 = document.createElement("img")
imagen3.src = ("./buzo jordan.webp")
imagen3.classList.add("card-img-top")
imagen3.alt = "Buzo Jordan"
card3.appendChild(imagen3)

let cardBody3 = document.createElement("div")
cardBody3.classList.add("card-body")
card3.appendChild(cardBody3)


let titulo3 = document.createElement("h5")
titulo3.classList.add("card-title")
titulo3.textContent = "Buzos Canguro"
cardBody3.appendChild(titulo3)

let parrafo3 = document.createElement("p")
parrafo3.classList.add("card-text")
parrafo3.textContent = "Buzos de tipo Canguro desde el S al XXL, marca Jordan y Puma"
cardBody3.appendChild(parrafo3)

let button3 = document.createElement("button")
button3.classList.add("btn")
button3.classList.add("btn-primary")
button3.textContent = "Ver Todo en Buzos"

cardBody3.appendChild(button3)
card3.appendChild(cardBody3)

col3.appendChild(card3)


// Zapatillas

let col4 = document.createElement("div")
col4.classList.add("col")


let card4 = document.createElement("div")
card4.classList.add("card")
card4.style.width = "250px"

let imagen4 = document.createElement("img")
imagen4.src = ("https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTeu1F1i0DJkYnB1pSzyyY6h1vE8DwKifTMblW7wrX_7KM11AvHjDaxezW3sMqszFW3RfKBgknjxavYqdzDj9w8p7UADBwnXi1Ap75N3sxz")
imagen4.classList.add("card-img-top")
imagen4.alt = "Jordan Retro 4 Black Cat"
card4.appendChild(imagen4)

let cardBody4= document.createElement("div")
cardBody4.classList.add("card-body")
card4.appendChild(cardBody4)


let titulo4 = document.createElement("h5")
titulo4.classList.add("card-title")
titulo4.textContent = "Zapatillas Jordan"
cardBody4.appendChild(titulo4)

let parrafo4 = document.createElement("p")
parrafo4.classList.add("card-text")
parrafo4.textContent = "Zapatillas Marca Jordan desde el 38 al 43"
cardBody4.appendChild(parrafo4)

let button4 = document.createElement("button")
button4.classList.add("btn")
button4.classList.add("btn-primary")
button4.textContent = "Ver Todo en Zapatillas"

cardBody4.appendChild(button4)
card4.appendChild(cardBody4)

col4.appendChild(card4)

contenedor.append(col1,col2,col3,col4)
