'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client_result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  client_result.init({
    clientId: DataTypes.INTEGER,
    resultId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'client_result',
  });
  return client_result;
};