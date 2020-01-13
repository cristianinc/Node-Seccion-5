//const argv = require("yargs").argv;
const colors = require("colors");
const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    //console.log("crear por hacer");
    porHacer.crear(argv.descripcion);
    break;

  case "listar":
    let listado = porHacer.getListado();

    for (let tarea of listado) {
      console.log("========Por Hacer========".green);
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("=========================".green);
    }

    break;

  case "actualizar":
    console.log("actualizar por hacer");
    break;
  default:
    console.log("comando no reconocido");
}
