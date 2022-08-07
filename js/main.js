//Constructor que crea los objetos que van a  simular las operaciones bancarias realizadas por el usuario en el último mes
class Operacion {
  constructor(fecha, hora, operacion, monto, saldo) {
    this.fecha = fecha;
    this.hora = hora;
    this.operacion = operacion;
    this.monto = monto;
    this.saldo = saldo;
  }
}
//Creación de los objetos que simulan las oeraciones bancarias utilizando el constructor previamente creado
//Depositos
const deposito1 = new Operacion(
  "08/07/2022",
  "15:55",
  "Deposito",
  "$ 15.000.00",
  "$ 125.343.00"
);
const deposito2 = new Operacion(
  "17/07/2022",
  "12:34",
  "Deposito",
  "$ 30.000.00",
  "$ 155.343.00"
);
const deposito3 = new Operacion(
  "10/07/2022",
  "12:18",
  "Deposito",
  "$ 20.000.00",
  "$ 115.343.00"
);
//Pagos realizados
const pago1 = new Operacion(
  "01/07/2022",
  "11:25",
  "Pago Servicio",
  "$ 2.572.27",
  "$ 130.253.65"
);
const pago2 = new Operacion(
  "05/07/2022",
  "10:33",
  "Pago Servicio",
  "$ 5.362.87",
  "$ 127.156.65"
);
const pago3 = new Operacion(
  "17/07/2022",
  "08:55",
  "Pago Servicio",
  "$ 1.942.63",
  "$ 122.165.36"
);
//Extracciones realizadas
const extracc1 = new Operacion(
  "14/07/2022",
  "15:55",
  "Extraccion",
  "$ 15.000.00",
  "$ 125.343.00"
);
const extracc2 = new Operacion(
  "03/07/2022",
  "12:34",
  "Extraccion",
  "$ 30.000.00",
  "$ 95.343.00"
);
const extracc3 = new Operacion(
  "20/07/2022",
  "12:18",
  "Extraccion",
  "$ 20.000.00",
  "$ 115.343.00"
);
//Transferencias realizadas
const trans1 = new Operacion(
  "22/07/2022",
  "18:55",
  "Transferencia",
  "$ 25.000.00",
  "$ 95.343.00"
);
const trans2 = new Operacion(
  "19/07/2022",
  "12:34",
  "Transferencia",
  "$ 22.000.00",
  "$ 144.343.00"
);
const trans3 = new Operacion(
  "27/07/2022",
  "12:18",
  "Transferencias",
  "$ 20.000.00",
  "$ 123.343.00"
);
//Creacion del array de objetos que va a  contener a las operaciones bancarias previamente simuladas
const operaciones = [];
//Funcion que agrega las operaciones simuladas al array contenedor de objetos
operaciones.push(
  deposito1,
  deposito2,
  deposito3,
  pago1,
  pago2,
  pago3,
  extracc1,
  extracc2,
  extracc3,
  trans1,
  trans2,
  trans3
);
//Funcion que permite ordenar por fecha de realización a las operaciones simuladas
let ordenados = operaciones.sort((a, b) => {
  if (a.fecha > b.fecha) {
    return 1;
  }
  if (a.fecha < b.fecha) {
    return -1;
  }
});
//Código que crea un array de objetos literales que contiene la simulación de las cuentas bancarias que poseé el usuario y su correspondiente saldo
const cuentas = [
  {
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "5069-5689756/4",
    identificador: "Cuenta",
    saldo: "$ 100.000,00",
  },
  {
    tipo: "Cta Corriente",
    moneda: "$",
    cuenta: "5069-5689652/4",
    identificador: "Cuenta",
    saldo: "$ 200.000,00",
  },
  {
    tipo: "Caja de Ahorro",
    moneda: "USD",
    cuenta: "5069-5685686/4",
    identificador: "Cuenta",
    saldo: "USD 5.000,00",
  },
];
//Funcion que al consultar el saldo devuelve una tabla con el saldo de las cuentas bancarias simuladas
function mostarSaldo() {
  //Codigo para cambiar el subtitulo del simulador
  let text = document.querySelector(".text");
  text.innerText = "Cuentas";
  //Código que crea el elemento tabla y le asigna sus clases
  let table = document.createElement("table");
  table.className = "table table-hover";
  //Código que crea la cabeza de la tabla
  let tableHead = document.createElement("thead");
  tableHead.innerHTML = `
      <thead>
        <tr>
          <th scope="col">Tipo de Cuenta</th>
          <th scope="col">Moneda</th>
          <th scope="col">Cuenta</th>
          <th scope="col">Identificacion</th>
          <th scope="col">Saldo</th>
        </tr>
      </thead>
    `;
  //Codigo que crea el cuerpo de la tabla
  let tableBody = document.createElement("tbody");
  tableBody.className = "table-group-divider";
  //Codigo que recorre el array de cuentas creado anteriormente
  for (const cuenta of cuentas) {
    tableBody.innerHTML += `
        <tr>
          <td>${cuenta.tipo}</td>
          <td>${cuenta.moneda}</td>
          <td>${cuenta.cuenta}</td>
          <td>${cuenta.identificador}</td>
          <td>${cuenta.saldo}</td>
        </tr>
      `;
  }
  //Codigo que agrega la cabeza y el cuerpo a la tabla creada anteriormente
  table.append(tableHead);
  table.append(tableBody);
  //Codigo que asigna a la tabla creada un padre
  let tableContainer = document.querySelector(".table-container");
  tableContainer.append(table);
}

// //Funcion que al consultar los movimientos devuelve una tabla con el saldo de las cuentas bancarias simuladas
function mostarMovimientos() {
  //Codigo para cambiar el subtitulo del simulador
  let text = document.querySelector(".text");
  text.innerText = "Ultimos Movimientos";
  //Codigo que modifica el HTML al momento de mostrar los movimientos bancarios simulados

  //Código que crea el elemento tabla y le asigna sus clases
  let table = document.createElement("table");
  table.className = "table table-hover";
  //Código que crea la cabeza de la tabla
  let tableHead = document.createElement("thead");
  tableHead.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Fecha</th>
        <th scope="col">Hora</th>
        <th scope="col">Operacion</th>
        <th scope="col">Monto</th>
        <th scope="col">Saldo</th>
      </tr>
    </thead>
  `;
  //Codigo que crea el cuerpo de la tabla
  let tableBody = document.createElement("tbody");
  tableBody.className = "table-group-divider";
  //Codigo que recorre el array de operaciones creado anteriormente
  for (const operacion of ordenados) {
    tableBody.innerHTML += `
      <tr>
        <td>${operacion.fecha}</td>
        <td>${operacion.hora}</td>
        <td>${operacion.operacion}</td>
        <td>${operacion.monto}</td>
        <td>${operacion.saldo}</td>
      </tr>
    `;
  }
  //Codigo que agrega la cabeza y el cuerpo a la tabla creada anteriormente
  table.append(tableHead);
  table.append(tableBody);
  //Codigo que asigna a la tabla creada un padre
  let tableContainer = document.querySelector(".table-container");
  tableContainer.append(table);
}
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function quitarTexto() {
  //Codigo que quita texto que no se usa del html
  let quitarMovimientos = document.querySelector(".quitar-texto");
  quitarMovimientos.innerText = "";
  //Codigo que quita texto que no se usa del html
  let quitarMovimientosDos = document.querySelector(".quitar-texto-dos");
  quitarMovimientosDos.innerText = "";
}
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function agregarTexto() {
  //Codigo que agrega texto al html
  let textoAgregado = document.querySelector(".agregar-texto");
  textoAgregado.innerText = "Desea realizar otra operacion?";
}
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function modificarOpcion() {
  //Codigo que cambia texto del html
  let opcionModificada = document.getElementById("opcion-modificada");
  opcionModificada.innerHTML =
    "<p>Si</p> <a href='../../index.html'> <div class='btn-derecha' id='btn-saldo'></div></a></li>";
  //Codigo que cambia texto del html
  let opcionModificadaDos = document.getElementById("opcion-modificada-dos");
  opcionModificadaDos.innerHTML =
    '<p>No</p> <a href="../salir/salir.html" class="link"> <div class="btn-derecha"></div></a>';
}
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function desactivarBtn(){
  //Codigo desactiva un boton del html
  let btnDesactivado = document.getElementById("tecla-disable");
  btnDesactivado.innerHTML = 
  '<a href="#" class="link link-disable"> <div class="btn-izquierda btn-disable" id="btn-movimientos"></div></a>'
}
//Evento que recibe informacion del mouse provista por el usuario, devuelve el saldo disponible simulado y modifica el html
// let eleccion = "";
// let modificacion = "";
let boton = document.getElementById("btn-saldo");
boton.addEventListener("click", respuestaClick);
function respuestaClick() {
  mostarSaldo();
  quitarTexto();
  agregarTexto();
  modificarOpcion();
  desactivarBtn();
}
//Evento que recibe informacion del mouse provista por el usuario, devuelve los movimientos bancarios simulados y modifica el html
let boton2 = document.getElementById("btn-movimientos");
boton2.addEventListener("click", respuestaClick2);
function respuestaClick2() {
  mostarMovimientos();
  quitarTexto();
  agregarTexto();
  modificarOpcion();
  desactivarBtn();
}
