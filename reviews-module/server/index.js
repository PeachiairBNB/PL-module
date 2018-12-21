const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js').db;
const reviewsRoutes = require('./router.js');
const port = process.env.PORT || 3005;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

//get all the reviews for a specific listing id
app.use('/', reviewsRoutes);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})