import { getConnectionOptions, createConnection } from 'typeorm';

export const createTypeORMConnection = async () => {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
    return createConnection({ ...connectionOptions });
}