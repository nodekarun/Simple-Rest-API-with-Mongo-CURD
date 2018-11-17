const express = require('express')
const router = express.Router()
const User = require('../models/user')


//GET Request
router.get('/',(req,res)=>{
    User.find({}, (err, emp) => {
      //  if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(emp);
    });
})


//Post Request
router.post('/',(req,res)=>{
  User.create(req.body).then((u)=>{
      res.send(u)
  })
})

//Delete Request
router.delete('/:id',(req,res)=>{
    const id=req.params.id
    User.findByIdAndRemove({_id:id}).then((u)=>{
        res.send(u)
    })
})




module.exports = router