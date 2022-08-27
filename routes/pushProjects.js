const express =  require('express')
const router = express.Router()
const projectsController = require('../controllers/projects')


router.get('/', projectsController.getProjects)
router.post('/createProjec', projectsController.createProject)
router.delete('/deleleProjec', projectsController.deleteProject)

module.exports = router

