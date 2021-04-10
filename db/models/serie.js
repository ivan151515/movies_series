const {Model} = require("objection")

class Serie extends Model {
    static get tableName() {
        return "series"
    }
}

module.exports = Serie;