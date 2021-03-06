const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors());

const MarcaController = require('./controllers/MarcaController')
const CarroController = require('./controllers/CarroController')
const UsuarioController = require('./controllers/UsuarioController')
const login = require("./middleware/login");

routes.get("/marcas", MarcaController.index)
      .get("/marcas_carros", MarcaController.marcas_carros);

routes.get("/carros", CarroController.index)
      .post("/carros", CarroController.store)
      .put("/carros/destaque/:id", CarroController.destaque)
      .get("/carros/destaques", CarroController.destaques)
      .get("/carros/pesq/:palavra", CarroController.search)
      .get("/carros/:id", CarroController.show)
      .delete("/carros/:id", CarroController.destroy)

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);

module.exports = routes;
