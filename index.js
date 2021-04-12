const express = require("express")
const moviesRouter = require("./routes/movies")
const seriesRouter = require("./routes/series")
const cors = require("cors")
const setupDb = require("./db/db-setup")
const specs = require("./config/swagger.config")
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
// import SwaggerJsDoc from "swagger-jsdoc"
const apiErrorHandler = require("./error/api-error-handler")
const ApiError = require("./error/ApiError")

require("dotenv").config()

const PORT = process.env.PORT || 5000

const app = express()

setupDb()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended : true}))

app.use("/movies", moviesRouter)
app.use("/series", seriesRouter)




app.use((req, res, next) => next(ApiError.notFound("Route does not exist")));
app.use(apiErrorHandler);


app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`))