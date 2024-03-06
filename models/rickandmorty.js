'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rickandmorty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rickandmorty.init({
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    created: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'rickandmorty',
  });
  return rickandmorty;
};