module.exports = {
  client: 'mysql',
  connection: {
    database: 'personal',
    user:     'root',
    password: 'password',
    host : 'localhost'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  } }
