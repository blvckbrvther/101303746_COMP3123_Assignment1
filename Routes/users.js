const express = require("express")
const userModel = require("../Models/usermodel")

const routes = express.Router()

//Signup
routes.post("/signup", async (req, res) => {
   
    try {
        const newUser = new userModel({...req.body})
        //const user = await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
})
//Login
routes.post("/login", async (req, res) => {
    try {
        const loginUser = await userModel.findOne()
        if(loginUser){
        res.status(200).send(loginUser)
        }else{
            res.status(200).json({
                message: "Login not successful"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = routes
