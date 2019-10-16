const express = require('express')
const router = express.Router()
const { userPledges } = require('./userPledges')
const { getCategoryPledges } = require('./getCategoryPledges')
const { confirmPledgeToUser } = require('./confirmPledgeToUser')

router.get('/api/home/:userId', userPledges)
router.get('/api/action-category/:categoryID', getCategoryPledges)
router.post('/api/:userId/:pledgeId/addPledge', confirmPledgeToUser)

module.exports = router
