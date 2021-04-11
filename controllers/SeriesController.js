const ApiError = require("../error/ApiError")
const Serie = require("../db/models/serie")
const { TV_MAZE_BASE_URL } = require("../constants")
const axios = require("axios")

class SeriesController {    
    async searchSeriesByTitle(req, res, next) {
        const {search} = req.query
        try {
            if(!search) {
                const series = await Serie.query().limit(5)

                return res.status(200).json({series})
            }

            let series = await Serie.query().where("title", "ILIKE", `%${search}%`).limit(5)

            if(series.length > 0) {
                return res.status(200).json({series})
            }

            const {data} = await axios.get(TV_MAZE_BASE_URL + search)
            // TODO: TEST IT OUT
            series = await Serie.query().insert({
                title: data.name,
                type: data.type,
                genre: data.genres && data.genres.length > 0 ? data.genres.join(", ") : null,
                runtime: data.runtime,
                rating: data.rating.average,
                plot: data.summary,
                network: data.network ? data.network.name : null,
                language: data.language,
                status: data.status
            }).returning("*")

            res.status(200).json({series})
        } catch (error) {
            console.error(error)
            next(ApiError.notFound("Not found"))
        }
    }


    async getSeriesById(req, res, next) {
        // TODO: TEST
        try {
            const serie = await Serie.query().findById(req.params.id)
            if(!serie) {
                return next(ApiError.notFound("Not Found"))
            }

            res.status(200).json({serie})
        } catch (error) {
            next(ApiError.internal("Something went wrong"))
        }
    }
}
module.exports = new SeriesController()