import { Sequelize } from 'sequelize';
import endpoint from './endpoints.config';
export const sequelize = new Sequelize(
    endpoint.DB_NAME,
    endpoint.DB_USER,
    endpoint.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: endpoint.DB_HOST,
        port: Number(endpoint.DB_PORT)
    }
);