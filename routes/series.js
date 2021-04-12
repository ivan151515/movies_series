const express = require("express")
const SeriesController = require("../controllers/SeriesController")

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Serie:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the serie
 *         title:
 *           type: string
 *           description: The serie's title
 *         type: 
 *           type: string
 *           description: Type of the series.. scripted, reality, documentary
 *         genre:
 *           type: string
 *           description: The serie's genre(s)
 *         runtime: 
 *           type: number
 *           description: The length of the series in minutes
 *         plot: 
 *           type: string
 *           description: Short description of the plot of the series 
 *         rating:
 *           type: number
 *           description: Movie's rating by critics        
 *         language: 
 *           type: string
 *           description: Language(s) spoken in the movie  
 *         status:
 *           type: string
 *           description: Whether the series are still running or ended
 *         network: 
 *           type: string
 *           description: The network that the series is on                     
 *       example:
 *         id: 2
 *         title: Only Fools and Horses
 *         type: Scripted
 *         writers: Silvester Stalone 
 *         actors: Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers
 *         network: BBC One 
 *         runtime: 50
 *         genre: Comedy
 *         plot:  Classic John Sullivan sitcom set in south London, centred on hapless market trader Del Boy, his brother Rodney, the rest of the Trotter clan and a host of Peckham characters   
 *         status: Ended
 *         rating: 8.6  
 *         language: English  
 */

 /**
  * @swagger
  * tags:
  *   name: Series
  *   description: The series searching API
  */

router.get("/", SeriesController.searchSeriesByTitle)
/**
 * @swagger
 * /series/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Series]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The series id
 *     responses:
 *       200:
 *         description: Details about the series
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Serie'
 *       404:
 *         description: The series was not found
 *       500:
 *         description: Internal server error    
 */
router.get("/:id", SeriesController.getSeriesById)

module.exports = router