if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const axios = require('axios')
const path = require('path');
const app = express();


app.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});


app.get('/city/:city', async (req, res) => {

  let { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${req.params.city}&days=5`);

 
  res.send(data);
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});


