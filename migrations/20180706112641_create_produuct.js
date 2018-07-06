
exports.up = function(knex, Promise) {
    return knex.schema.createTable('product', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('variety').notNullable()
        t.integer('product_category').notNullable()
        t.integer('maturity_period_in_day').notNullable()
        
       
        
        
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('product')
};
