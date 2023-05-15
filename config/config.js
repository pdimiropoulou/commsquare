require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "url" : process.env.ELEPHANTSQL_URL,
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.BB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "url" : process.env.ELEPHANTSQL_URL,
  },
  "production": {
    "username": "root",
    "password": process.env.BB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "url" : process.env.ELEPHANTSQL_URL,
  }
}
