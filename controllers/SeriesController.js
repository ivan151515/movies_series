const ApiError = require("../error/ApiError")
const { TV_MAZE_BASE_URL } = require("../constants")
const axios = require("axios")

class SeriesController {    
    async searchSeriesByTitle(req, res, next) {
        try {
            const {data} = await axios.get(TV_MAZE_BASE_URL + "big")
            res.status(200).json(data)
        } catch (error) {
            next(ApiError.notFound("Not found"))
        }
    }


    async getSeriesById(req, res, next) {
        res.status(200).json({id: req.params.id})
    }
}
module.exports = new SeriesController()