
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marcas').del()
    .then(function () {
      // Inserts seed entries
      return knex('marcas').insert([
        {nome: 'Fiat'},
        {nome: 'Renault'},
        {nome: 'Chevrolet'},
        {nome: 'Ford'},
        {nome: 'Volkswagen'},
        {nome: 'Honda'},
        {nome: 'Peugeot'},
        {nome: 'Hyundai'}
      ]);
    });
};
