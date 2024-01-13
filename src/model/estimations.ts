import { Sequelize,DataTypes } from 'sequelize';
import sequelize  from "../config/sequelize-config";
import Estimations from '../../types/modelTypes/estimations';  

Estimations.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  estimation_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
  },
},
{
    sequelize,
    modelName:'estimations',
    tableName:'estimations',
});

export default Estimations;
