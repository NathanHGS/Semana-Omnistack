const knex = require('knex');
const configuration = require('../../knexfile');

const connectioin = knex(configuration.development);

module.exports = connectioin;