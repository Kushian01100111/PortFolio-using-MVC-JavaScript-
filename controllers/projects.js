const Projects = require('../models/projects')

module.exports ={
    getProjects: async (req,res) =>{
        try{
            const allProjects = await Projects.find()
            res.render('projects.ejs', {projects: allProjects})
        }catch(err){
            console.log(err)
        }
    },
    createProject: async (req,res) =>{
        try{
            await Projects.create({name:req.body.name, imgUrl: req.body.imgUrl, description: req.body.textArea, technologys: req.body.tech, language: req.body.lang, live: req.body.live})
            console.log('Project added')
            res.redirect('/projects')
        }catch(err){
            console.log(err)
        }
    },
    deleteProject: async (req, res) =>{
        console.log(req.body.projectIdFromJsFile)
        try{
            await Projects.findOneAndDelete({_id: req.body.projectIdFromJsFile})
            console.log('Deleted project')
            res.json('Deleted it')
        }catch(err){
            console.log(err)
        }
    }
}