const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');

function csvToJSON(JSONFileName, pathToCSV) {
  const csvFilePath = path.join(__dirname, 'input', `${pathToCSV}.csv`);
  if (!fs.existsSync(csvFilePath)) {
    console.error('CSV file does not exist!');
    return;
  }

  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      const outPath = path.join(__dirname, 'output', `${JSONFileName}.json`);
      // Convert object to string, write json to file
      fs.writeFileSync(outPath, JSON.stringify(jsonObj), 'utf8',
        function (err) { console.log(err); });
    })
}

function csvToJSON2(JSONFileName, pathToCSV) {
  const csvFilePath = path.join(__dirname, 'input', `${pathToCSV}.csv`);
  const jsonFilePath = path.join(__dirname, 'output', `${JSONFileName}.json`);

  const readableStream = fs.createReadStream(csvFilePath);
  const writeableStream = fs.createWriteStream(jsonFilePath);

  readableStream.pipe(csv()).pipe(writeableStream);
}

function reverse(obj) {
  const reversedString = obj.string.split("").reverse().join("");
  if (obj.length < obj.string.length) (`String is longer then ${obj.length} characters`)
  else reversedString;
  return reversedString;
}

function reverse2(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse1(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = {
  reverse,
  csvToJSON2,
  csvToJSON
};