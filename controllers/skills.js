const skills = require('../models/skills')

module.exports ={
    getSkills: async (req,res) =>{
        try{
            const allSkills = await skills.find()
            res.render('skills.ejs', {skills: allSkills})
        }catch(err){
            console.log(err)
        }
    },
    createSkills: async (req,res) =>{
        try{
            await skills.create({name:req.body.name})
            console.log('skill added')
            res.redirect('/skill')
        }catch(err){
            console.log(err)
        }
    },
    deleteSkills: async (req, res) =>{
        console.log(req.body.skillsIdFromJsFile)
        try{
            await skills.findOneAndDelete({name: req.body.name})
            console.log('Deleted skill')
            res.json('Deleted it')
        }catch(err){
            console.log(err)
        }
    }
}