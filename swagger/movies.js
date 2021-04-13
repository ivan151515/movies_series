
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


 /**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get the movie by title, if no search term provided returns 5 movies
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *         description: The search term
 *     responses:
 *       200:
 *         description: Details about movies
 *         contents:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Not found 
 *       500:
 *         description: Something went wrong
 */

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Gets the movie by id
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