const express = require("express")
const SeriesController = require("../controllers/SeriesController")

const router = express.Router()

router.get("/", SeriesController.searchSeriesByTitle)

router.get("/:id", SeriesController.getSeriesById)

module.exports = router