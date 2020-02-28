// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/products-dev',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    }
  },

  testing: {
    client: 'pg',
    connection: 'postgresql://localhost/products-testing',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',

    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgresql://localhost/products',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',

    }
  }

};
