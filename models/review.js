'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.review.hasMany(models.comment)
      models.review.belongsTo(models.user)
    }
  };
  review.init({
    title: DataTypes.TEXT,
    author: DataTypes.TEXT,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    book_rating: {
      type: DataTypes.INTEGER,
      validate:{
        min:0,
        max:5
      }
    },
    book_price: DataTypes.INTEGER,
    img_url: DataTypes.TEXT,
    category: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};