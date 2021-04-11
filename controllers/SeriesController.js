const ApiError = require("../error/ApiError")
const Serie = require("../db/models/serie")
const { TV_MAZE_BASE_URL } = require("../constants")
const axios = require("axios")

class SeriesController {    
    async searchSeriesByTitle(req, res, next) {
        try {
            const {data} = await axios.get(TV_MAZE_BASE_URL + "big")
            res.status(200).json({data, query: req.query})
        } catch (error) {
            next(ApiError.notFound("Not found"))
        }
    }


    async getSeriesById(req, res, next) {
        try {
            const serie = await Serie.query().findById(req.params.id)
            if(!serie) {
                return next(ApiError.notFound("Not Found"))
            }

            res.status(200).json({serie, id: req.params.id})
        } catch (error) {
            next(ApiError.internal("Something went wrong"))
        }
    }
}
module.exports = new SeriesController()