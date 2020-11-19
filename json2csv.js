const { parse } = require('json2csv')
const fs = require('fs')

const spring = require('./resultJson/spring.json')
const summer = require('./resultJson/summer.json')
const fall = require('./resultJson/fall.json')
const winter = require('./resultJson/winter.json')
const newYear = require('./resultJson/newYear.json')

try {
  fs.writeFileSync('./resultCsv/spring.csv', parse(spring))
  fs.writeFileSync('./resultCsv/summer.csv', parse(summer))
  fs.writeFileSync('./resultCsv/fall.csv', parse(fall))
  fs.writeFileSync('./resultCsv/winter.csv', parse(winter))
  fs.writeFileSync('./resultCsv/newYear.csv', parse(newYear))
} catch (err) {
  console.error(err)
}
