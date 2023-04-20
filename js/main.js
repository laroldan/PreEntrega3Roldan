const productos = [
  { id: 1, nombre: "Milanesa", precio: 1199 },
  { id: 2, nombre: "Hamburguesa", precio: 2199 },
  { id: 3, nombre: "Fideos", precio: 1000 },
  { id: 4, nombre: "Merluza", precio: 1420 },
  { id: 5, nombre: "Papas Fritas", precio: 899 },
  { id: 6, nombre: "Arroz", precio: 749 },
  { id: 7, nombre: "Parrillada", precio: 3999 },
  { id: 8, nombre: "Ensalada", precio: 1000 },
  { id: 9, nombre: "Tequeños", precio: 1370 },
  { id: 10, nombre: "Puchero", precio: 1299 },
];

const compra = [];

//FUNCTIONS

function mayorQue(n) {
  return (m) => m > n;
}

function Plato(comida, cant, precio) {
  this.nombre = comida;
  this.cantidad = cant;
  this.precio = precio;
}

function agregar() {
  compra.push(nuevo);
}

function numMesa() {
  let mesa = Math.random() * 100;
  return Math.floor(mesa);
}

//VARIABLES

let totalCompra = 0;
let nombre;
let apellido;
let nuevo;
let mesa = numMesa();

//LISTA DE COMIDAS POR CONSOLA
const infobox1 = document.getElementById("box1");

const listado = document.querySelector("#listado");
listado.addEventListener("click", () => {
  console.log("◘ LISTADO DE PLATOS  MESA:" + mesa);
  console.log("--------------");
  productos.forEach((el) => {
    console.log(el.nombre + " $" + el.precio);
  });
  console.log("--------------");

  infobox1.innerHTML = `<p class="d-flex flex-column justify-content-center align-items-center pt-3"">
  LISTADO DE PLATOS  MESA:${mesa}<br>
  --------------<br>
  ${productos[0].nombre} $ ${productos[0].precio}<br>
  ${productos[1].nombre} $ ${productos[1].precio}<br>
  ${productos[2].nombre} $ ${productos[2].precio}<br>
  ${productos[3].nombre} $ ${productos[3].precio}<br>
  ${productos[4].nombre} $ ${productos[4].precio}<br>
  ${productos[5].nombre} $ ${productos[5].precio}<br>
  ${productos[6].nombre} $ ${productos[6].precio}<br>
  ${productos[7].nombre} $ ${productos[7].precio}<br>
  ${productos[8].nombre} $ ${productos[8].precio}<br>
  ${productos[9].nombre} $ ${productos[9].precio}<br>
  --------------<br>
</p>`;
});

//EMPEZAR CON LA COMPRA

let comenzar = document.querySelector("#comenzar");
comenzar.addEventListener("click", () => {
  nombre = prompt("Ingrese su nombre:");
  apellido = prompt("Ingrese su apellido");

  totalCompra = 0;

  let prod = prompt("Diganos que desea comer:");
  let cant = prompt("Cuantos platos de " + prod + " quiere?");

  let encontrado = productos.find((el) => {
    return el.nombre.toLowerCase() == prod.toLowerCase();
  });
  console.log(encontrado);

  let encontrado2 = productos.some((el) => {
    return el.nombre.toLowerCase() == prod.toLowerCase();
  });

  if (encontrado2 == false) {
    alert("Producto no encontrado.");
  } else {
    alert("Producto encontrado correctamente.");

    //cuenta de precio * cant
    let posicion = productos.indexOf(encontrado);
    totalCompra += productos[posicion].precio * cant;

    //pushea el prod pedido y cantidad a nuevo array
    nuevo = new Plato(
      productos[posicion].nombre,
      cant,
      productos[posicion].precio
    );
    agregar();
  }

  let opcion = prompt("Quieres seguir agregando comida? (1=SI | 0=NO)");

  while (opcion != 0) {
    let prod = prompt("Diganos que más desea comer:");
    let cant = prompt("Cuantos platos de " + prod + " quiere?");

    let encontrado = productos.find((el) => {
      return el.nombre.toLowerCase() == prod.toLowerCase();
    });
    console.log(encontrado);

    let encontrado2 = productos.some((el) => {
      return el.nombre.toLowerCase() == prod.toLowerCase();
    });

    if (encontrado2 == false) {
      alert("Producto no encontrado.");
    } else {
      alert("Producto encontrado correctamente.");

      //cuenta de precio * cant
      let posicion = productos.indexOf(encontrado);
      totalCompra += productos[posicion].precio * cant;

      //pushea el prod pedido y cantidad a nuevo array
      nuevo = new Plato(
        productos[posicion].nombre,
        cant,
        productos[posicion].precio
      );
      agregar();
    }
    opcion = prompt("Quieres seguir agregando comida? (1=SI | 0=NO)");
  }
  console.log(compra);
  let descuento = mayorQue(10000);
  descuento(totalcompra) == true &&
  if (descuento(totalCompra) == true && ) {
    totalCompra = totalCompra - totalCompra * 0.2;
  }
});

//CARRITO POR CONSOLA
const infobox2 = document.getElementById("box2");

const carrito = document.querySelector("#carrito");
carrito.addEventListener("click", () => {
  if (totalCompra == 0) {
    alert("USTED NO INGRESO NADA EN EL CARRITO");
    console.log("USTED NO INGRESO NADA EN EL CARRITO");
  } else {
    console.log("◘ CARRITO FINAL\tMESA:" + mesa);
    console.log("------PLATOS CANTIDADES PRECIOxU-------");
    compra.forEach((el) => {
      console.log(el.nombre + "\t" + el.cantidad + "\t$" + el.precio);
    });
    console.log("");
    console.log("EL DESCUENTO ES AUTOMATICO.");
    console.log("TOTAL DE LA COMPRA =\t$" + totalCompra);
    console.log("---------------------------------------");

    infobox2.innerHTML = `<p class="d-flex flex-column justify-content-center align-items-center">
    GRACIAS POR VISITARNOS: <strong>${nombre} ${apellido}</strong> MESA: ${mesa}<br>
    EL DESCUENTO ES AUTOMATICO.<br>
    --------------<br>
    TOTAL DE LA COMPRA: $${totalCompra}
    </p>`;

    console.log(
      "\nGRACIAS POR VISITARNOS: " + nombre + " " + apellido + " MESA: " + mesa
    );
  }
});
