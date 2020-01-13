const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("no se pudo grabar", err);
  });
};

const crear = descripcion => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer);

  guardarDB();
  return porHacer;
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

module.exports = { crear, getListado };
