import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";
import { default as UserType } from "../../types/User";

interface UserCreationAttributes extends Optional<UserType, "id"> {}

class Users extends Model<UserType, UserCreationAttributes> {
  public id!: number;
  public username!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public isAdmin!: boolean;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Users",
    timestamps: false,
  }
);

export default Users;
