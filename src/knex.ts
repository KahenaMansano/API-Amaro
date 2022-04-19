const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile')[environment]
console.log('CONFIG', config)
export default require('knex')(config)
