import puppeteer from 'puppeteer';

const wait =(time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve()}, time*1000)
    })
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();




  await page.goto('https://www.superex.com/trade/ACH_BTC');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});
  


  console.log('#### wait for 5 seconds to load. start')

  await wait(5)

  console.log('#### wait for 5 seconds to load. end')

  // Wait and click on first result
  const searchResultSelector = '.block.marB4.bold.price.green';

//   const searchResultSelector = '.convert-price';
   let aaa =   await page.waitForSelector(searchResultSelector);



  let fullTitle = await aaa?.evaluate(el => el.textContent);



  fullTitle = fullTitle.trim()



  let rate = parseFloat(fullTitle)
  // Print the full title
  console.log('The title of this blog post is "%s".', rate);

  await browser.close();
})();