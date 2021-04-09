const express = require("express")

const router = express.Router()

router.get("/", (req, res ) => {
    res.json({test: "I am series router"})
})

module.exports = router