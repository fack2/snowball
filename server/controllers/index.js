
const express = require('express')
const router = express.Router()
const { getCategoryPledges } = require('./getCategoryPledges')
const { getPledgeInfo } = require('./getPledgeInfo')

router.get('/api/action-category/:categoryID', getCategoryPledges)
router.get('/api/action-category/pledge/:pledgeID', getPledgeInfo)

module.exports = router
