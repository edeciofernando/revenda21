const knex = require("../database/dbConfig");

module.exports = {

  async index(req, res) {
    const marcas = await knex("marcas").orderBy("nome");
    res.status(200).json(marcas);
  }
};
