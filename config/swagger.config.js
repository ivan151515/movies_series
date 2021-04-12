const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config()


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Movies&Series Search",
			version: "1.0.0",
			description: "A simple Express API for searching movies and series",
		},
		servers: [
			{
				url: `http://localhost:${process.env.PORT}`,
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = specs