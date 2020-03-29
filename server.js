const express = require('express')
const path = require('path')
const app = express()
const path = require('path')
const cors = require("cors");
app.disable('x-powered-by')
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'build')))
// need to declare a "catch all" route on your express server
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(process.env.PORT || 5000, function() {
  console.log(`Frontend start on http://localhost:5000`)
})