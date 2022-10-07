module.exports = {
  username: 'postgres',
  password: '',
  database: 'accounts',
  host: 'localhost',
  port: 5432,
  logging: false,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
