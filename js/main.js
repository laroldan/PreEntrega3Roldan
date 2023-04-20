const nombre = document.querySelector("#nombre"),
  apellido = document.querySelector("#apellido");

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//funciones

function guardarUsuario(usuario) {
  return usuarios.push(usuario);
}

function guardarEnStorage(el) {
  return localStorage.setItem("usuarios", JSON.stringify(el));
}

let foundUser = usuarios.some((el) => {
  return (
    el.nombre.toLowerCase() == nombre.toLowerCase &&
    el.apellido.toLowerCase() == apellido.toLowerCase
  );
});

//ejecutar codigo
guardarEnStorage(usuarios);

const acceso = document.querySelector("#form-login");
acceso.addEventListener("submit", (e) => {
  e.preventDefault();
  if (foundUser == false) {
    let newUser = new Usuario(nombre.value, apellido.value);
    guardarUsuario(newUser);
    guardarEnStorage(usuarios);
    acceso.reset();
    window.location.href = "../index.html";
  } else {
    window.location.href = "../index.html";
  }
});
