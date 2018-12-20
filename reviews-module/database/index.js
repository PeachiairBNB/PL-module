const mongoose = require("mongoose");

//create reviews in mongodb
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });
const db = mongoose.connection;

const reviewsSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  review: String,
  date: String,
  listingid: Number,
  flagged: Boolean,
  photo: String,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  checkin: Number,
  value: Number
});

const Reviews = db .model("Reviews", reviewsSchema);

//this will insert all the reviews from MOCK_DATA.json
let insertAllDummyData = dummyDataArray => {
  dummyDataArray.map(dummyData => {
    return Reviews.findOneAndUpdate(
      { id: dummyData.id },
      {
        id: dummyData.id,
        name: dummyData.name,
        review: dummyData.review,
        date: dummyData.date,
        listingid: dummyData.listingid,
        flagged: dummyData.flagged,
        photo: dummyData.photo,
        accuracy: dummyData.accuracy,
        communication: dummyData.communication,
        cleanliness: dummyData.cleanliness,
        location: dummyData.location,
        checkin: dummyData.checkin,
        value: dummyData.value
      },
      { upsert: true }
    ).exec();
  });
};

module.exports.insertAllDummyData = insertAllDummyData;