const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const PORT = process.env.PORT || 3001;
const server = express();
const routes = require("./routes/api-routes");


// Define middleware here
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}



server.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });
// Define API routes here

// Send every other request to the React server
// Define any API routes before this runs
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
