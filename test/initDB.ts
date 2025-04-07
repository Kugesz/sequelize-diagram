import { Sequelize } from 'sequelize';
import sequelize from './database';
import Incomes from './model/Income';
import Products from './model/Products';
import Tickets from './model/Tickets';
import Users from './model/Users';
import Workers from './model/Workers';
import Tasks from './model/Tasks';
import DeliveryTime from './model/DeliveryTime';
import Category from './model/Category';

const initDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to sync the database:', error);
    }
};

Tasks.belongsTo(Products, { foreignKey: 'productId' });
Products.hasMany(Tasks, { foreignKey: 'productId' });

Category.hasMany(Products, { foreignKey: 'categoryId' });
Products.belongsTo(Category, { foreignKey: 'categoryId' });

Tasks.belongsTo(Tickets, { foreignKey: 'ticketId' });
Tickets.hasMany(Tasks, { foreignKey: 'ticketId' });

Workers.hasMany(Tasks, { foreignKey: 'workerId' });
Tasks.belongsTo(Workers, { foreignKey: 'workerId' });

Users.hasMany(Tickets, { foreignKey: 'buyerId' });
Tickets.belongsTo(Users, { foreignKey: 'buyerId' });

Products.hasOne(DeliveryTime, { foreignKey: 'productId' });
DeliveryTime.belongsTo(Products, { foreignKey: 'productId' });

export default initDB;
