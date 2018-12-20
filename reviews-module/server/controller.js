const getListingIdReviews = require('../database/index.js').getListingIdReviews;

let retrieve = (req, res) => {
    let listingId = req.params.listingId;
    console.log('this is listingID', listingId)
    getListingIdReviews(listingId)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.error(`error getting reviews from listing id: ${listingId}`, err);
        res.sendStatus(500);
    })
}

module.exports.retrieve = retrieve;

