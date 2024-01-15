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
},
{
    sequelize,
    modelName:'estimations',
    tableName:'estimations',
});

export default Estimations;
