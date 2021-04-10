require("dotenv").config()

const OMDB_BASE_URL = "http://www.omdbapi.com/?t="
// `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_API_KEY}&`
const TV_MAZE_BASE_URL = "http://api.tvmaze.com/singlesearch/shows?q="
module.exports = {
    OMDB_BASE_URL,
    TV_MAZE_BASE_URL
}