'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.result.belongsToMany(models.client,{through: 'client_result'})
    }
  };
  result.init({
    resultName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'result',
  });
  return result;
};