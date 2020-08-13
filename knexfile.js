module.exports = {
  client: 'mysql',
  connection: {
    database: 'db_ommini_0586',
    user:     'api_node',
    password: '8E6adoLim4ke2AJA7IXIz1QOG4J1cO',
    host : '192.241.163.102'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  } }
