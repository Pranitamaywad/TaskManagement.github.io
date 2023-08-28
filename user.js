
const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');


const userSchema = new mongoose.Schema({
  title:{
      type:String,
      required:true,
      minlength:1,
      maxlength:50
  },
  description:{
    type:String,
    required:true
  }
}) ;
const User = mongoose.model('User',userSchema);

router.get('/',async(req,res)=>{
    const user = await User.find();
    res.send(user);
  });

  router.get('/:id',async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user)return res.status(404).send('user with this id is not found')
    res.send(user);
  });

  router.delete('/:id',async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user)return res.status(404).send('not found')
    res.send(user);
  });

  router.post('/',async(req,res)=>{
    const {error} = validateUser(req.body);
    if(error)return res.status(400).send(error);
        
    const user = new User({
            title:req.body.title,
            description:req.body.description
         })
         await user.save();
         res.send(user);
  });

  router.put('/:id',async(req,res)=>{
    const {error} = validateUser(req.body)
    if(error)return res.status(400).send(error);

    const user = await User.findByIdAndUpdate(req.params.id,{title:req.body.title, description:req.body.description});
    if(!user)return res.status(404).send('not found');

    res.send(user);

  })
  
  function validateUser(user){
    const schema = Joi.object().keys({
        
       title:Joi.string().min(1).max(50).required(),
        description:Joi.string().required()  

    })
    const result = schema.validate(user);
    console.log(result);
    return result;
   };

 module.exports.router=router;
 