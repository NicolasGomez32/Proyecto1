const express = require ('express');
const router = express.Router();
const tasks = require ('../Models/task');
const { db } = require('../Models/task');


router.get('/' , async (req , res) => {
    const task = await tasks.find()
    res.render("index" , {
        tasks:task
    });
})
router.post('/add' , async (req , res) => {
    const task = new tasks (req.body);
    await task.save();
    res.redirect("/");
})
router.get('/delete/:id' , async (req , res) => {
    const {id} = req.params;
    await tasks.remove({_id : id})
    res.redirect('/')
})
router.get('/update/:id' ,  (req , res) => {
    res.render('NewWindow')
})
router.post('/update/:id', async (req , res ,next) => {
        
    try {const {id} = req.params;
    const taskOld = await tasks.findById(id)}
    console.log(taskOld);
    res.send("Received")

    
/* 
    try{
        const editTask = new tasks (req.body)
    await editTask.save()
    
    }catch(err){
        const {id} = req.params
        tasks.remove({_id : id});
    }
    
     */
    
}) 

module.exports=router