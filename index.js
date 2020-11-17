const fs = require('fs')
const webdriver = require('selenium-webdriver')
const { Builder, By, until } = webdriver

const capabilities = webdriver.Capabilities.chrome()
capabilities.set('chromeOptions', {
  args: ['--headless', '--no-sandbox', '--disable-gpu', `--window-size=1980,1200`]
})
const baseUrl = 'http://www.haiku-data.jp/kigo_list.php'

;(async () => {
  const driver = await new Builder().withCapabilities(capabilities).build()

  try {
    await driver.get(baseUrl + '?season_cd=5#result') // ここの数字1-5が春-新年に対応

    const kigoList = await getInnerTextArrayByCssSelector(driver, 'tr:not(:first-child) td:nth-child(2) a')
    const yomiganaList = await getInnerTextArrayByCssSelector(driver, 'tr:not(:first-child) td:nth-child(3)')
    const kyukanaList = await getInnerTextArrayByCssSelector(driver, 'tr:not(:first-child) td:nth-child(4)')
    const bodaiList = await getInnerTextArrayByCssSelector(driver, 'tr:not(:first-child) td:nth-child(5)')

    const kigoDetailsList = kigoList.map((kigo, index) => {
      return {
        kigo: kigo.trim(),
        yomigana: yomiganaList[index].trim(),
        kyukana: kyukanaList[index].trim(),
        bodai: bodaiList[index].split('・').map((str) => str.trim())
      }
    })

    fs.writeFileSync('./resultJson/newYear.json', JSON.stringify(kigoDetailsList, null, '\t')) // ファイル名指定
  } finally {
    driver.close()
  }
})()

const getInnerTextArrayByCssSelector = async (driver, cssSelector) => {
  const elements = await driver.findElements(By.css(cssSelector))
  const elementsTextPromise = elements.map((element) => element.getText())
  const textList = await Promise.all(elementsTextPromise)
  return textList
}
