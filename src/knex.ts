const environment = process.env.ENVIRONMENT || 'development'
const config = require('./knexfile')[environment]

export default require('knex')(config)
