import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | delete/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:delete/index');
    assert.ok(route);
  });
});
