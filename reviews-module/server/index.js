const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js').db;
const port = process.env.PORT || 3005;

const getListingIdReviews = require('../database/index.js').getListingIdReviews;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

//get all the reviews for a specific listing id
app.get('/api/items/:number', (req, res) => {
	let listingId = req.params.number;
	// console.log('this is listingId', listingId)
	getListingIdReviews(listingId)
	.then((data) => {
		res.send(data);
	})
	.catch((err) => {
		console.error(`error getting reviews from listing id: ${listingId}`, err);
		res.sendStatus(500);
	})
})

//post a review for a specific listing id
app.post('/api/items:number', (req, res) => {

})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})