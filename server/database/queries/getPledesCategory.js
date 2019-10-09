const dbConnection = require('./../db_connection')

const getPledesCategory = categoryId => {
  console.log('database is reached')
  return dbConnection
    .query('select * from pledge where category_id = $1', [categoryId])
    .then(res => console.log(res.rows[0]))
    .catch(err => console.log(err))
}

module.exports = getPledesCategory
