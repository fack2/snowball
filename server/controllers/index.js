
const express = require('express')
const router = express.Router()
const { getCategoryPledges } = require('./getCategoryPledges')
const { getPledgePageInfo } = require('./getPledgePageInfo')

router.get('/api/action-category/:categoryID', getCategoryPledges)
router.get('/api/action-category/pledge/:pledgeID', getPledgePageInfo)

module.exports = router
