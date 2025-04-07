import {
    Sequelize,
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    Optional,
} from 'sequelize';
import sequelize from '../database';
import { default as TicketType } from '../../types/Ticket';

interface TicketCreationAttributes extends Optional<TicketType, 'id'> {}

class Ticket extends Model<TicketType, TicketCreationAttributes> {
    public id!: number;
    public buyerId!: number;
    public address!: string;
    public ETA!: number;
    public pickupTime?: Date;
    public bayNumber?: string;
    public isAssigned!: boolean;
}

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        buyerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ETA: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pickupTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        bayNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isAssigned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'Ticket',
        timestamps: false,
    },
);

export default Ticket;
