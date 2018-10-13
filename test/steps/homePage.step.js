//var expect = require('chai').expect;
const { Given, When, Then } = require('cucumber')
//const { expect } = require('chai')
var home = require('../pages/home.page.js');
var product = require('../pages/product.page.js');
var common = require('../pages/common.page.js');

Given('I navigate to the site', function() {
  browser.url('./');
  console.log("Navigating to the site..!");
})

When(/^I click on the \"(.*)\" button$/, (item) => {
  console.log(`Clicking on the ${item} button..!`);
  if(item=="product"){
     //browser.click('.shop-callout a');
     home.productButton.click();
   }else if(item=="buy"){
      home.buyButton.click();
   }
});
Then(/^I should be seeing the \"(.*)\" page$/,url => {
   console.log(`Then I should be seeing ${url} page`);
});
Then('I should be seeing the review label', function() {
  console.log("seeing the review label....!");
  var ifExisting = common.isExisting(product.reviewLblSelector);
   console.log("IfExisting : "+ifExisting);
  // var ifVisible = browser.isVisible('#comment-form > h3');
   var ifVisible = common.isVisible(product.reviewLblSelector);
   console.log("ifVisible : "+ifVisible);
  //assert.equal(ifVisible,true);
  expect(ifVisible).to.equal(false, 'Visible is true..!');

  // var pages = {
  //   home: {
  //     url: '/',
  //     title: 'Robot Parts Emporium'
  //   },
  //   product: {
  //     url: '/product-page.html',
  //     title: 'Totally Not Evil Sentient Robot - Robot Parts Emporium'
  //   }
  // }

  // var page = pages[pageName];
  //
  // var productTitle = browser.getTitle();
  // expect(productTitle).to.equal(page.title);
  //
  // var url = browser.getUrl();
  // expect(url).to.include(page.url, 'URL mismatch');
})


//   it('Check the reviews are being written',function(){
//     // var robotSelectionBttn = $('//a[.="See our Vast Robot Selection"]');
//      console.log("Button :"+ home.robotSelectBtn.getText());
//      home.robotSelectBtn.click();
//     // browser.pause(2000);
//      // browser.waitUntil(function(){
//      //   return browser.getText('#comment-form > h3')=='Add a Review';
//      // },2000,'Cannot see the Add Review');
//      // var ifExisting =browser.isExisting('#comment-form > h3');
//      var ifExisting = common.isExisting(product.reviewLblSelector);
//       console.log("IfExisting : "+ifExisting);
//      // var ifVisible = browser.isVisible('#comment-form > h3');
//       var ifVisible = common.isVisible(product.reviewLblSelector);
//       console.log("ifVisible : "+ifVisible);
//      //assert.equal(ifVisible,true);
//      expect(ifVisible).to.equal(true, 'Visible is true..!');
//
//   });
// });
