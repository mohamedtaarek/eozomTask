const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');
let rawdata = fs.readFileSync('countries.json.txt');
let parsedData = JSON.parse(rawdata);

let countries = Object.keys(parsedData);
// console.log(countries);
result = countries.map(country => {
  let max = 0 ;
  let index= 0;
  let name = country;
  let cities= parsedData[country].length
  parsedData[country].forEach((city,i) => {
    if (city.length > max){
      max = city.length  
      index = i; 
    }
  });
  let maxCity = parsedData[country][index];
  return {"Country Name":name,"Number of cities":cities,"City with max length":maxCity};
});

const csv = new ObjectsToCsv(result);
 csv.toDisk('./result.csv');