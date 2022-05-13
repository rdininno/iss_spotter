const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  for (let ii = 0; ii < passTimes.length; ii++) {
    const date = new Date(0);
    date.setUTCSeconds(passTimes[ii].risetime);
    console.log(`Nex Pass is at ${date} for ${passTimes[ii].duration} seconds`);
  }
})
.catch((error) => {
  console.log("It didnt work: ", error.message);
});