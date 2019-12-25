require('dotenv').config(); 


module.exports = {

  // If using onine database
  development: {
    database: 'gqslyidi',
    username: 'gqslyidi',
    password: 'icIp7tSXCbbUOf2VNoCpfZjh1Avc-ypm',
    host: 'rajje.db.elephantsql.com',
    dialect: 'postgres'
  },
  
  test: {
    database: 'banks_test',
    username: 'rajkannan', //Change $${SUPERUSER}} if you have changed
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
