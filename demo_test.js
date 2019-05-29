const assert = require('assert');
Feature('Demo');

Before((I) => I.amOnPage('/'));

Scenario('Check Title', async (I) => {
 const title = await I.grabTitle();
 assert.equal(title, 'Demo App');
});


Scenario('Check Addition', async (I) => {
  I.fillField('first', 10);
  I.fillField('second', 30);
  I.click('Calculate');
  const result = await I.grabTextFrom('#result');
  assert.equal(result, '40');

});