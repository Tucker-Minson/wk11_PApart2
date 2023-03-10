'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DraftPick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DraftPick.belongsTo(models.Player, {
        foreignKey: 'playerId'
      })
      DraftPick.belongsTo(models.Fan, {
        foreignKey: 'fanId'
      })

    }
  }
  DraftPick.init({
    fanId: {
      type:DataTypes.INTEGER,
    },
    playerId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'DraftPick',
  });
  return DraftPick;
};
