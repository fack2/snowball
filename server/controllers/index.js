const express = require('express')
const router = express.Router()
const getCategoryInfo = require('./getCategoryInfo')
const { getPledges } = require('./getPledges')

router.get('/api/dashboard', getCategoryInfo.get)
router.get('/api/pledges-categories/1', getPledges)

module.exports = router
