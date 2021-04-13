exports.up = function(knex) {
    return knex.schema
    .createTable("movies", table => {
        table.increments("id");
        table.string("title").notNullable();
        table.string("director").notNullable()
        table.string("writers")
        table.string("actors")
        table.integer("year")
        table.integer("runtime")
        table.string("genre")
        table.text("plot")
        table.string("rated")
        table.float("rating")
        table.string("language")
        table.timestamps(true, true)
    })
    .createTable("series", table => {
        table.increments("id");
        table.string("title").notNullable()
        table.string("type")
        table.string("genre")
        table.integer("runtime")
        table.float("rating")
        table.text("plot")
        table.string("status")
        table.string("network")
        table.string("language")
        table.timestamps(true, true)
    })    
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("series")
    .dropTableIfExists("movies")
};