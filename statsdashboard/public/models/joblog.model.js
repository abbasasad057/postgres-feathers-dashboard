// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const joblog = sequelizeClient.define('joblog', {
    jobid:{
    	type:DataTypes.INTEGER,
    	field: 'jobid',
      	primaryKey: true,
      	allowNull: false
    },
    jobname: {
      type: DataTypes.STRING,
      allowNull: false,
      field:'jobname'
    },
    jobstatus: {
      type: DataTypes.STRING,
      allowNull: false,
      field:'jlgstatus'
    },
    createdAt:{
      type: DataTypes.DATE,
      field: 'joblastrun'
    },
    updatedAt:{
      type: DataTypes.DATE,
      field: 'jobnextrun'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  joblog.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return joblog;
};
