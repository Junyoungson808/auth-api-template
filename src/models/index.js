'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const userModel = require('../auth/models/users');
const Collection = require('./data-collection.js');

// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const DATABASE_URL = 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);
const user = userModel(sequelize, DataTypes);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  user
};
