const dbConfig = (env) => {
    if (env === 'production') {
      return {
        database: process.env.DB_PRODUCTION_URL,
        password: process.env.PRODUCTION_DB_PASSWORD,
        username: process.env.PRODUCTION_DB_USERNAME,
        host: process.env.PRODUCTION_DB_HOST,
        dbname: process.env.PRODUCTION_DB_NAME,
        dialect: process.env.PRODUCTION_DB_DIALECT,
      };
    }
    if (env === 'development') {
      return {
        username: process.env.DATABASE_URL,
        password: process.env.password,
        dbname: process.env.dbname,
        host: 'localhost',
        dialect: 'postgres',
      };
    }
    throw new Error(
      'specify enviroment, only "test" and "development" is available now',
    );
  };
  module.exports = {
    DB_CONFIG: dbConfig(process.env.NODE_ENV),
  };