
exports.up = function(knex) {
    return knex.schema
        .createTable('products', tbl => {
            tbl.increments()

            tbl.string('name', 128)
                .notNullable()
                .unique()

            tbl.integer('price')
                .notNullable()

        })
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('produts');
};
