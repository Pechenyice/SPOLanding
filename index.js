const express = require("express");
const http    = require("http");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT ? process.env.PORT : 8080;
app.listen(port, () => {

	console.log("Server is running on " + port);
});