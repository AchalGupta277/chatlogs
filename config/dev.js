const config = {
  database: {
    databaseName: process.env.DATABASE_NAME || 'dbname',
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    host: process.env.DATABASE_HOST || '',
    port: process.env.DATABASE_PORT || '27017',
  },
};

module.exports = config;
