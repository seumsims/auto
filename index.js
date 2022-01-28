const puppeteer = require('puppeteer')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://seumsims.github.io/test-req/")
    await page.screenshot({ path: "screenshot4.jpg" })
    await browser.close() // if this code not written node will run untill somehow node stop
}

start()