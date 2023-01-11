module.exports = {
  username: 'postgres',
  password: '',
  database: 'users',
  host: '192.168.1.249',
  port: 54320,
  logging: true,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
