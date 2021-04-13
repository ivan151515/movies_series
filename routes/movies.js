const express = require("express")
const MoviesController = require("../controllers/MoviesController")
const router = express.Router()

router.get("/", MoviesController.searchMoviesByTitle)

router.get("/:id", MoviesController.getMovieById)

module.exports = router