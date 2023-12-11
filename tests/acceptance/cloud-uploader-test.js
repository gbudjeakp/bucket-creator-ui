import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'cloud-file-uploader/tests/helpers';

module('Acceptance | cloud uploader', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h2').hasText('Cloud Bucket Creator');
    assert.dom('.homepage a.button').hasText('Create Bucket');
    await click('.homepage a.button');

    assert.strictEqual(currentURL(), '/createbucket');
  });

  test('visiting /createbucket', async (assert) => {
    await visit('/createbucket');

    assert.strictEqual(currentURL(), '/createbucket');
    assert.dom('nav').exists();
    assert.dom('h2').hasText('Create Linode Bucket');
  });

  test('navigating using the navbar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav h1').hasText('Bucket Creator');
    assert.dom('nav a.menu-view').hasText('View Bucket');
    assert.dom('nav a.menu-create').hasText('Create Bucket');

    await click('nav a.menu-create');
    assert.strictEqual(currentURL(), '/createbucket');

    await click('nav a');
    assert.strictEqual(currentURL(), '/');
  });
});
