import { module, test } from 'qunit';
import { setupRenderingTest } from 'cloud-file-uploader/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      list: {
        hostname: 'bucket-from-api.us-southeast-1.linodeobjects.com',
        label: 'bucket-from-api',
        created: '2023-12-07T04:48:21',
        cluster: 'us-southeast-1',
        size: 0,
        objects: 0,
      },
    });

    await render(hbs`<List  @list={{this.list}}/>`);

    assert.dom('article').hasClass('bucket');
    assert.dom('article h3').hasText('Bucket Name: bucket-from-api');
    assert
      .dom('article .detail.cluster')
      .includesText('cluster: us-southeast-1');
    assert.dom('article .detail.created').includesText('2023-12-07T04:48:21');
    assert.dom('article .detail.files').includesText('0');
  });
});
