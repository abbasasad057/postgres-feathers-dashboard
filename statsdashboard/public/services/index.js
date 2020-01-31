const realtimeStats = require('./realtime_stats/realtime_stats.service.js');
const joblog = require('./joblog/joblog.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(realtimeStats);
  app.configure(joblog);
};
