// import express from 'express';
const express = require('express')
const app = express();
var admin = require("firebase-admin");
// admin.auth().getu

var serviceAccount = require("./rad5-lms.json");
const  {UserUID } = require('./getUserUID');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const assignrolebyuid = async (uid,role)=>{
  try{
    admin.auth()
    .setCustomUserClaims(uid, { [role]: true })
    .then((result) => {
     
    })
    .catch((error) => {
      throw new Error (error);
    });
  }catch(error){
    throw new Error(error)
  }
}



app.post('/setclaim', async (req, res)=>{
 
try{
   const {email,role} = req.body
  const uid = await UserUID(email)
   await assignrolebyuid(uid,role);
    
    res.status(200).json({message:'done'});
} catch(err){
      throw new Error(err)
    }
})


app.listen(3000, ()=>{})