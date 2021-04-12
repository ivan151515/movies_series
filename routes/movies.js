const express = require("express")
const MoviesController = require("../controllers/MoviesController")
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - director
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The movie title
 *         director:
 *           type: string
 *           description: The movie's director(s)
 *         writers:
 *           type: string
 *           description: The movie's writer(s)
 *         year:
 *           type: number
 *           description: Year of making
 *         actors:
 *           type: string
 *           description: The movie's actors
 *         genre:
 *           type: string
 *           description: The movie's genre(s)
 *         runtime: 
 *           type: number
 *           description: The length of the movie in minutes
 *         plot: 
 *           type: string
 *           description: Short description of the plot of the movie
 *         rated:
 *           type: string
 *           description: The rating letter (G, PG, PG-13, R or NC-17)—this indicates the level of content  
 *         rating:
 *           type: number
 *           description: Movie's rating by critics        
 *         language: 
 *           type: string
 *           description: Language(s) spoken in the movie                     
 *       example:
 *         id: 2
 *         title: Rocky
 *         director: John G. Avildsen
 *         writers: Silvester Stalone 
 *         actors: Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers
 *         year: 1976 
 *         runtime: 120
 *         genre: Drama, Sport
 *         plot:  A small-time boxer gets a supremely rare chance to fight a heavyweight champion in a bout in which he strives to go the distance for his self-respect.   
 *         rated: PG
 *         rating: 8.1  
 *         language: English  
 */

 /**
  * @swagger
  * tags:
  *   name: Movies
  *   description: The movie searching API
  */


router.get("/", MoviesController.searchMoviesByTitle)

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: Details about the movie
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: The movie was not found
 *       500:
 *         description: Internal server error    
 */
router.get("/:id", MoviesController.getMovieById)

module.exports = router