'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kpi2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kpi2.init({
    interval_start_timestamp: DataTypes.BIGINT,
    interval_end_timestamp: DataTypes.BIGINT,
    cell_id: DataTypes.INTEGER,
    number_of_unique_users: DataTypes.INTEGER,
    interval: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kpi2',
    freezeTableName: true,
  });
  return Kpi2;
};
