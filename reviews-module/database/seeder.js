const fs = require("fs");
const insertAllDummyData = require('./index.js').insertAllDummyData;

fs.readFile('./mock-data/MOCK_DATA.json', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      let dummyData = JSON.parse(data);
    //   console.log('length of dummy data', Object.keys(dummyData).length);
      insertAllDummyData(dummyData);
    }
  });

  //in terminal, run
  //node database/seeder.js