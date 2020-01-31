// Initializes the `realtime_stats` service on path `/realtime_stats`
const createService = require('feathers-sequelize');
const createModel = require('../../models/realtime_stats.model');
const hooks = require('./realtime_stats.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/realtime_stats', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('realtime_stats');

  service.hooks(hooks);
};
