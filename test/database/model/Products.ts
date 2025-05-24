import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";
import { default as ProductType } from "../../types/Product";

interface ProductCreationAttributes extends Optional<ProductType, "id"> {}

class Product
  extends Model<ProductType, ProductCreationAttributes>
  implements ProductType
{
  public id!: number;
  public name!: string;
  public displayName!: string;
  public price!: number;
  public categoryId!: number;
  public describe!: string;
  public inventory!: number;
  public img!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    describe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    timestamps: false,
  }
);

export default Product;
