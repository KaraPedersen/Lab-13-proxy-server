/* eslint-disable no-console */
// import dependencies
import express from 'express';
import request from 'superagent';
import cors from 'cors';
import morgan from 'morgan';

import { formatLocation } from './munge-utils.js';

// import client from './client.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('PROXY API');
});

app.get('/location', async (req, res) => {
  // console.log(req.query.search);
  try {

    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_DB_API_KEY}&q=${req.query.search}&format=json`);
      
     

    const location = formatLocation(response.body);

    res.json(location);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  } 
});



// app.get('/weather', async (req, res) => {
//   // console.log(req.query.search);
//   try {

//     const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&key=${process.env.WEATHER_DB_API_KEY}`);
      
     

//     const weather = formatWeather(response.body);

//     res.json(weather);
//   }
//   catch(err) {
//     console.log(err);
//     res.status(500).send({ error: err });
//   } 
// });

export default app;