
import puppeteer from 'puppeteer';

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, time * 1000)
    })
}

const getRealTimeRate = async ({ url }) => {
    // step 1. load the page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1080, height: 1024 });
    console.log(`#### wait for 5 seconds to load ${url}...start`)
    await wait(5)
    console.log(`#### wait for 5 seconds to load ${url}...finish`)
    //
    // step 2. get the text
    const searchResultSelector = '.block.marB4.bold.price';
    let element = await page.waitForSelector(searchResultSelector);
    let fullTitle = await element?.evaluate(el => el.textContent);
    //
    // step 3. close the page
    await browser.close();
    //
    // step 4. text -> number
    fullTitle = fullTitle.trim()
    let rate = parseFloat(fullTitle)
    //
    // step 5. return
    return rate
    //
}

export default getRealTimeRate 