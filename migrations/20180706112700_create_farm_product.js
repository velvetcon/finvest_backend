
exports.up = function(knex, Promise) {
    return knex.schema.createTable('farm_product', function (t) {
        t.increments('id').primary()
        t.integer('farm_id').notNullable()
        t.integer('product_id').notNullable()
        t.decimal('capacity').notNullable()
        t.decimal('measurement')
        t.date('planting_date').notNullable()
        
       
        
        
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('farm_product')
};
