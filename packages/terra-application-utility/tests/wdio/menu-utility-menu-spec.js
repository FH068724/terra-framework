Terra.describeViewports('MenuUtilityMenu', ['huge'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-menu-utility-menu');
    browser.waitForVisible('#default');
  });

  describe('Displays a default menu utility menu', () => {
    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Focus-menu utility menu', () => {
    beforeEach(() => {
      browser.keys(['Tab', 'Tab']);
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.validatesElement({ selector: '#default' });
  });
});
