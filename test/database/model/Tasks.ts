import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";
import { Task as TaskType } from "../../types/Task";

interface TaskCreationAttributes extends Optional<TaskType, "id"> {}

class Task extends Model<TaskType, TaskCreationAttributes> {
  public id!: number;
  public workerId?: number;
  public productId!: number;
  public ticketId!: number;
  public pcs!: number;
  public status!: string;
  public deliverTo?: string;
  public priority!: number;
  public time!: number;
  public isAssigned!: boolean;
  public startTime?: number;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    workerId: {
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticketId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pcs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
    },
    deliverTo: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.INTEGER,
    },
    isAssigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    startTime: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Tasks",
    timestamps: false,
  }
);

export default Task;
