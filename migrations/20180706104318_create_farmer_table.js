
exports.up = function(knex, Promise) {
    return knex.schema.createTable('farm', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('capacity').notNullable()
       
        
        
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('farm')
};
