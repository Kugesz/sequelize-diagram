import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";
import Income from "../../types/Income";

interface IncomeCreationAttributes extends Optional<Income, "id"> {}

class Incomes extends Model<Income, IncomeCreationAttributes> {
  readonly id!: number;
  public date!: Date;
  public amount!: number;
}

Incomes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Incomes",
    timestamps: false,
  }
);

export default Incomes;
