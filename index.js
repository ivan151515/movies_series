const express = require("express")
require("dotenv").config()


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())


app.listen(PORT, () => console.log(`Server started at localhost:${PORT}`))