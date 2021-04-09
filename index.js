const express = require("express")
const moviesRouter = require("./routes/movies")
const seriesRouter = require("./routes/series")
const cors = require("cors")
const setupDb = require("./db/db-setup")
const apiErrorHandler = require("./error/api-error-handler")
const ApiError = require("./error/ApiError")

require("dotenv").config()


const app = express()

setupDb()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



app.use("/movies", moviesRouter)
app.use("/series", seriesRouter)




app.use((req, res, next) => next(ApiError.notFound("Route does not exist")));
app.use(apiErrorHandler);


app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`))