import { Model, ModelAttributeColumnOptions } from "sequelize";

export interface AttributeInfo {
  name: string;
  type: string;
  sequelizeType: any; // Adjusted to match the DataType from Sequelize
  allowNull: boolean;
  primaryKey?: boolean;
  autoIncrement?: boolean;
  defaultValue?: any;
  // Add other properties as needed
}

export interface ModelType<T extends Model> {
  new (values?: object, options?: any): T;
  getAttributes(): { [key: string]: ModelAttributeColumnOptions };
}

export function getModelAttributes<T extends Model>(
  model: ModelType<T>
): AttributeInfo[] {
  if (!model || typeof model.getAttributes !== "function") {
    throw new Error("Invalid Sequelize model provided");
  }

  const attributes = model.getAttributes();

  return Object.entries(attributes).map(([name, options]) => ({
    name,
    type: options.type.constructor.name,
    sequelizeType: options.type,
    allowNull: options.allowNull ?? true,
    primaryKey: options.primaryKey,
    autoIncrement: options.autoIncrement,
    defaultValue: options.defaultValue,
  }));
}

export default getModelAttributes;
