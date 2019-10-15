const getPledgeInfo = require('./../database/queries/getPledgeInfo')

exports.getPledgeInfo = (req, res) => {
  const { pledgeID } = req.params

  getPledgeInfo(pledgeID)
    .then(data => res.json(data.rows))
    .catch(err => res.status(500).json({ err: err }))
}
