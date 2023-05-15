'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kpi1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kpi1.init({
    interval_start_timestamp: DataTypes.BIGINT,
    interval_end_timestamp: DataTypes.BIGINT,
    service_id: DataTypes.INTEGER,
    total_bytes: DataTypes.FLOAT,
    interval: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kpi1',
    freezeTableName: true,
  });
  return Kpi1;
};
