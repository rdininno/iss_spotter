const {nextISSTimesForMyLocation} = require(`./iss`);

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (let ii = 0; ii < passTimes.length; ii++) {
    const date = new Date(0);
    date.setUTCSeconds(passTimes[ii].risetime);
    console.log(`Nex Pass is at ${date} for ${passTimes[ii].duration} seconds`);
  }
});
