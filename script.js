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

const prod1 = new Producto(1, "camisa", "nike", "https://http2.mlstatic.com/D_NQ_NP_2X_661329-MLA49700066534_042022-F.webp", "camisa deportiva", 15000, 10 )
let persona1 = new Persona(
  19,
  "Jeremias",
  "Villarruel",
  "48616706",
  17,
  "Veneco 1512"
);

let boton = document.createElement("button")
boton.textContent="Enviar"
boton.style.backgroundColor="blue"
boton.style.color="White"
card.appendChild(row)

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

    td7.appendChild(botonEliminar);

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    tbody.appendChild(tr);

    total.textContent = `total a pagar: $${persona1.calculo()}`

  });
}
