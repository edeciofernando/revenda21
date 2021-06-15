const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors());

const MarcaController = require('./controllers/MarcaController')
const CarroController = require('./controllers/CarroController')
const UsuarioController = require('./controllers/UsuarioController')
const login = require("./middleware/login");

routes.get("/marcas", MarcaController.index);

routes.get("/carros", CarroController.index)
      .post("/carros", CarroController.store)
      .get("/carros/destaque/:id", CarroController.destaque)

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);

module.exports = routes;
