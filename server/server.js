const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {
  // res.sendFile('../public/index.html')
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
