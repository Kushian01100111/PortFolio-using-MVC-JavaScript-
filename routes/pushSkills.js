const express =  require('express')
const router = express.Router()
const skillsController = require('../controllers/skills')


router.get('/', skillsController.getSkills)
router.post('/createSkill', skillsController.createSkills)
router.delete('/deleleSkill', skillsController.deleteSkills)

module.exports = router