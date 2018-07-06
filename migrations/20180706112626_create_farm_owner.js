
exports.up = function(knex, Promise) {
    return knex.schema.createTable('farm_owner', function (t) {
        t.increments('id').primary()
        t.integer('farmer_id').notNullable()
        t.integer('farm_id').notNullable()
       
        
        
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('farm_owner')
};
