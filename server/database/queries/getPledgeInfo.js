const dbConnection = require('./../db_connection')

const getPledgeInfo = pledgeID => {
  return dbConnection
    .query(
      'select distinct pledge.title, pledge_pros_cons.statement, pledge_pros_cons.color, pledge_references.description, pledge_instructions.description, pledge_resources.description from pledge inner join pledge_pros_cons ON pledge_pros_cons.pledge_id = pledge.pledge_id inner join pledge_references ON pledge_references.pledge_id = pledge.pledge_id inner join pledge_instructions ON pledge_instructions.pledge_id = pledge.pledge_id inner join pledge_resources ON pledge_instructions.pledge_id = pledge.pledge_id where pledge.pledge_id = $1', [pledgeID]
    )
}

module.exports = getPledgeInfo
