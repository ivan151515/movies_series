const ApiError = require("../error/ApiError")
const { OMDB_BASE_URL } = require("../constants")
const axios = require('axios');
const Movie = require("../db/models/movie");

require("dotenv").config()

class MoviesController {    
    searchMoviesByTitle = async(req, res, next) => {
        const {search} = req.query
        const searchTerm = search.trim()

        try {
            // if no search term just return five movies
            if(!searchTerm) {
                const movies = await Movie.query().limit(5)
                res.status(200).json({movies})
            }

            const movies = await Movie.query().where("title", "ILIKE", `%${searchTerm}%`).limit(5)
            // if movie(s) found return 
            if(movies.length > 0) {
               return res.status(200).json({movies})
            }

            // no movie found search in local db search in omdb
            const {data} = await axios.get(OMDB_BASE_URL + `${searchTerm}&apikey=${process.env.OMDB_API_KEY}`)
            
            if(data.Response === "True") {
                // TODO: TEST THIS OUT
                const movie = await Movie.query().insert({
                    title: data.Title,
                    rated: data.Rated,
                    runtime: data.Runtime !== "N/A" ? data.Runtime.split(" min")[0] : null,
                    genre: data.Genre,
                    director: data.Director,
                    writers: data.Writers,
                    actors: data.Actors,
                    plot: data.Plot,
                    rating: data.imdbRating !== "N/A"? data.imdbRating : null,
                    language: data.Language,
                    year: data.Year !== "N/A" ? data.Year : null,
                    writers: data.Writer
                }).returning("*")

                res.status(200).json({movies: [movie]})
            } else {
                res.status(200).json({movies: []})
            }            
        } catch (error) {
            next(ApiError.internal("Something went wrong"))
        }

    }


    async getMovieById(req, res, next) {

        try {
            const movie = await Movie.query().findById(req.params.id)
            if(!movie) {
               return next(ApiError.notFound("Movie not found"))
            }
            res.status(200).json({movie})            
        } catch (error) {
            next(ApiError.internal("Something went wrong"))
        }
    }
}
module.exports = new MoviesController()