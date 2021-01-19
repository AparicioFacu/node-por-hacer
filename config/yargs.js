const descripcion = {
    demand: true,
    alias: "d",
    desc: "descripcion de la tarea por hacer"
}
const completado = {
    alias: "c",
    default: true,
    desc: "marca como completado o pendiendte la tarea"
}
const argv = require("yargs")
    .command("crear", "crear un elemento por hacer", {
        descripcion
    })
    .command("actualizar", "Actualizar el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "Borrar una tarea por hacer", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}