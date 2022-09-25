import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TableComponent />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <TableComponent>
        template block text
      </TableComponent>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
