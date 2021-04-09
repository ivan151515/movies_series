const express = require("express")
const movieRouter = require("./routes/movies")
const seriesRouter = require("./routes/series")
const setupDb = require("./db/db-setup")

require("dotenv").config()


const app = express()

setupDb()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/movies", movieRouter)
app.use("/series", seriesRouter)


app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`))