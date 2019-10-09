const getPledesCategory = require('./../database/queries/getPledesCategory')

exports.getPledges = (req, res) => {
  const { categoryId } = req
  getPledesCategory(categoryId)
    .then(data => console.log(res.json(data)))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
