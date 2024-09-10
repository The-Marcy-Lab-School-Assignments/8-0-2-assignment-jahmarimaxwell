const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

// or just 

require('dotenv').config();

// we can access the value using process.env

console.log(process.env.API_KEY); // abc123

// and then make a controller

const serveGifs = async (req, res, next) => {
  const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;
  const [data, error] = await fetchData(API_URL);
  if (error) {
    console.log(error.message);
    return res.status(404).send(error);
  }
  res.send(data);
}

const port = 8080
// and route it to an endpoint

app.get('/api/gifs', serveGifs)

app.listen(port, () => {
    // indicating server is listening
    console.log(`Server is running on http://localhost:${port}`)
});