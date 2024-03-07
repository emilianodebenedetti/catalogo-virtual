module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "bd_catalogo_ildiavolo"
    }
  }
};

/* const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    }
});

module.exports = {
    knex
} */