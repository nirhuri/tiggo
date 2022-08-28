import { getConnectionOptions, DataSource } from 'typeorm';
import "reflect-metadata";

export const createTypeORMConnection = async () => {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
    return new DataSource({ ...connectionOptions });
}