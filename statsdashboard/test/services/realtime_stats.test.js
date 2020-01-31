const assert = require('assert');
const app = require('../../public/app');

describe('\'realtime_stats\' service', () => {
  it('registered the service', () => {
    const service = app.service('realtime_stats');

    assert.ok(service, 'Registered the service');
  });
});
