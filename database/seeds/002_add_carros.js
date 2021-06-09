
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('carros').del()
    .then(function () {
      // Inserts seed entries
      return knex('carros').insert([
        {modelo: 'Gol', marca_id: 5, ano: 2015, preco: 29800, foto: 'https://http2.mlstatic.com/D_NQ_NP_865912-MLB45292244477_032021-W.jpg'},
        {modelo: 'Sandero', marca_id: 2, ano: 2018, preco: 37500, foto: 'https://img2.icarros.com/dbimg/imgadicionalnoticia/4/93379_1'},
        {modelo: 'Astra', marca_id: 3, ano: 2017, preco: 32500, foto: 'https://www.autoo.com.br/fotos/2017/3/1280_960/opel_astra_2017_11_06032017_5276_1280_960.jpg'}
      ]);
    });
};
