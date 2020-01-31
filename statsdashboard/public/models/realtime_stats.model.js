// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const realtimeStats = sequelizeClient.define('realtime_stats', {
    tablename: {
      type: DataTypes.STRING,
      allowNull: false
    },
     statid: {
      type: DataTypes.INTEGER,
      field: 'statid',
      primaryKey: true,
      allowNull: false
    },
    oldcount: {
      type: DataTypes.INTEGER,
      field: 'oldcount',
      primaryKey: true,
      allowNull: false
    },
    inserted: {
      type: DataTypes.INTEGER,
      field: 'inserted',
      primaryKey: true,
      allowNull: false
    },
    updated: {
      type: DataTypes.INTEGER,
      field: 'updated',
      primaryKey: true,
      allowNull: false
    },
    deleted: {
      type: DataTypes.INTEGER,
      field: 'deleted',
      primaryKey: true,
      allowNull: false
    },
    newcount: {
      type: DataTypes.INTEGER,
      field: 'newcount',
      primaryKey: true,
      allowNull: false
    },
    createdAt:{
      type: DataTypes.DATE,
      field: 'createdat'
    },
    updatedAt:{
      type: DataTypes.DATE,
      field: 'updatedat'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  realtimeStats.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return realtimeStats;
};
