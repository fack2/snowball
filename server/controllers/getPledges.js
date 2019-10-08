const getPledesCategory = require('./../database/queries/getPledesCategory')

exports.getPledges = (req, res) => {
  const { categoryId } = req
  getPledesCategory(categoryId)
    .then(data => res.json(data))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
