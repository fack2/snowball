const dbConnection = require('./../db_connection')

const getPledesCategory = categoryId => {
  return dbConnection
    .query('select * from pledge where category_id = $1', [categoryId])
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getPledesCategory
