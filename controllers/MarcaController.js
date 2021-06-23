const knex = require("../database/dbConfig");

module.exports = {

  async index(req, res) {
    const marcas = await knex("marcas").orderBy("nome");
    res.status(200).json(marcas);
  },

  async marcas_carros(req, res) {
    const marcas = await knex
      .select("m.nome")
      .count("c.id as num")
      .from("marcas as m")
      .leftOuterJoin("carros as c", "m.id", "c.marca_id")
      .groupBy("m.nome")
      .having("num", ">", 0)

    res.status(200).json(marcas);
  }
};
