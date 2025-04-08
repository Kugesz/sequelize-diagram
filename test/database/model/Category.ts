import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';
import { default as CategoryType } from '../../types/Category';

interface CategoryCreationAttributes extends Optional<CategoryType, 'id'> {}

class Category extends Model<CategoryType, CategoryCreationAttributes> {
    public id!: number;
    public name!: string;
    public displayName!: string;
}

// Initialize the model
Category.init(
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
    },
    {
        sequelize,
        modelName: 'Category',
        timestamps: false,
    },
);

export default Category;
