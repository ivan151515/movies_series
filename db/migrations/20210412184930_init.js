
exports.up = function(knex) {
    return knex.schema.table("movies", table => {
        table.text("plot").alter()
    }).table("series", table => {
        table.text("plot").alter()
    })
   
};

exports.down = function(knex) {
    
};
