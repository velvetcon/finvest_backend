
exports.up = function(knex, Promise) {
    return knex.schema.createTable('normal_user', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('password').notNullable()
        t.string('Nationality').notNullable()
        t.string('country_code').notNullable()
        t.string('phone').notNullable()
        
        
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('normal_user')
};
