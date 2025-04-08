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

export interface ModelType<T extends Model = Model> {
  new (values?: object, options?: any): T;
  getAttributes(): { [key: string]: ModelAttributeColumnOptions };
}

const loadAllModel = async <T extends Model>(
  paths: string[]
): Promise<ModelType<T>[]> => {
  const models: ModelType<T>[] = [];

  for (const path of paths) {
    try {
      const model = await import(path);
      if (model.default) {
        models.push(model.default as ModelType<T>);
      } else {
        console.warn(`No default export found in ${path}`);
      }
    } catch (error) {
      console.error(`Failed to load model from ${path}:`, error);
    }
  }

  return models;
};

export default loadAllModel;
