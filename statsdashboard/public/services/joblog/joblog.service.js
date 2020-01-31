// Initializes the `joblog` service on path `/joblog`
const createService = require('feathers-sequelize');
const createModel = require('../../models/joblog.model');
const hooks = require('./joblog.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/joblog', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('joblog');

  service.hooks(hooks);
};
