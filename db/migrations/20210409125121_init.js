
exports.up = function(knex) {
    return knex.schema
    .createTable("movies", table => {
        table.increments("id");
        table.string("title").notNullable();
        table.string("director").notNullable()
        table.integer("length")
        table.string("description").notNullable()
        table.timestamps(true, true)
    })
    .createTable("series", table => {
        table.increments("id");
        table.string("title").notNullable()
        table.string("director").notNullable()
        table.string("description").notNullable()
        table.timestamps(true, true)
    })    
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("series")
    .dropTableIfExists("movies")
};
