const fs = require("fs");
const insertAllDummyData = require("./index.js").insertAllDummyData;
const images = require("../mock-data/images.js").images;

fs.readFile("./mock-data/MOCK_DATA.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    let dummyData = JSON.parse(data);
    //make array of images and randomly insert images to each photo property in dummydata
    for (var key in dummyData) {
        var randomImage = images[Math.floor(Math.random() * Math.floor(images.length))];
        dummyData[key]['photo'] = randomImage;
    }
    insertAllDummyData(dummyData);
  }
});

//in terminal, run
//node database/seeder.js