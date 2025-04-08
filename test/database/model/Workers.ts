import {
    Sequelize,
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    Optional,
} from 'sequelize';
import sequelize from '../database';
import { Worker as WorkerType } from '../../types/Worker';

interface WorkerCreationAttributes extends Optional<WorkerType, 'id'> {}

class Worker extends Model<WorkerType, WorkerCreationAttributes> {
    public id!: number;
    public name!: string;
    public username!: string;
    public password!: string;
    public email!: string;
    public address!: string;
    public birthDate!: Date;
    public isActive!: boolean;
    public onBreak!: boolean;
}

Worker.init(
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
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        onBreak: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'Worker',
        timestamps: false,
    },
);

export default Worker;
