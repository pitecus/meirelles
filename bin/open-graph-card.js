const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4200/#/open-graph-card');
  await page.setViewport({
    width: 780,
    height: 409
  })
  await page.screenshot({
    type: 'jpeg',
    quality: 80,
    path: 'src/assets/card.jpeg'
  });

  await browser.close();
})();