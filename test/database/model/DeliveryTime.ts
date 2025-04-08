import {
    Sequelize,
    DataTypes,
    Model,
    InferCreationAttributes,
    InferAttributes,
    Optional,
} from 'sequelize';
import sequelize from '../database';
import { default as DeliveryTimeType } from '../../types/DeliveryTime';

interface DeliveryTimeCreationAttributes extends Optional<DeliveryTimeType, 'id'> {}

class DeliveryTime extends Model<DeliveryTimeType, DeliveryTimeCreationAttributes> {
    public id!: number;
    public productId!: number;
    public time!: number;
    public count!: number;
}

DeliveryTime.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        modelName: 'DeliveryTime',
        timestamps: false,
    },
);

export default DeliveryTime;
