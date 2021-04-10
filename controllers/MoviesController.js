const ApiError = require("../error/ApiError")
const { OMDB_BASE_URL } = require("../constants")
const axios = require('axios');

require("dotenv").config()

class MoviesController {    
    searchMoviesByTitle = async(req, res, next) => {
        try {
            const {data} = await axios.get(OMDB_BASE_URL + "r" + `&apikey=${process.env.OMDB_API_KEY}`)
            res.status(200).json(data)
        } catch (error) {
            next(ApiError.notFound("Not found"))
        }

    }


    async getMovieById(req, res, next) {
        res.status(200).json({id: req.params.id})
    }
}
module.exports = new MoviesController()