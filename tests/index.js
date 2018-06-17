import { Selector } from 'testcafe';

fixture('Getting Started')
  .page('https://github.com');

test('Find "testcafe-example" repo on GitHub', async (t) => {
  const repo = Selector('body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--bright.d-lg-flex.flex-justify-between.flex-auto > div > div > div > div > form > label > input.form-control.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus');
  // search github
  await t
    .typeText('form[action="/search"]', 'testcafe-example user:mjhea0')
    .pressKey('enter');
  // check li for results
  await t
    .expect(repo.innerText).contains('mjhea0/testcafe-example');
});
