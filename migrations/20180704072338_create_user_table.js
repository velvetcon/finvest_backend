
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('password').notNullable()
        t.string('Nationality').notNullable()
        t.string('country_code').notNullable()
        t.string('phone').notNullable()
        t.integer('role').notNullable()
        
        
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    
    return knex.schema.dropTableIfExists('users')
};
