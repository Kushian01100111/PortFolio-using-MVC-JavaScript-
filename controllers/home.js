const { get } = require('mongoose')
const Projects = require('../models/projects')
const Skills = require('../models/skills')
const language = 'en'
const otherLanguage = 'es'


module.exports = {
    getIndex: async (req,res) =>{
        try{//Search Project documents
            const projectsItems = await Projects.find({language: language})
            //Search Skills documents
            const skillsItems = await Skills.find({language: language})
            res.render('index.ejs',{project: projectsItems, skills: skillsItems})
        }catch(err){
            console.log(err)
        }
    },
    getEs: async (req,res) =>{
        try{//Search Project documents
            const projectsItems = await Projects.find({language: otherLanguage})
            //Search Skills documents
            const skillsItems = await Skills.find({language: otherLanguage})
            res.render('index-Es.ejs',{project: projectsItems, skills: skillsItems })
        }catch(err){
            console.log(err)
        }
    }
}