
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_group', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        
       
        
        
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_group')
};
