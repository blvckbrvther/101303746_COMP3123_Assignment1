const express = require("express")
const { findById } = require("../Models/employeeModel")
const employeeModelRoute = require("../Models/employeeModel")
const routes = express.Router()

routes.get("/employees", async (req, res) => {
    try {
        const newEmployeeList = await employeeModelRoute.find()
        
        res.status(200).send(newEmployeeList)
    } catch (error) {
        res.status(400).send(error)
    }
})

routes.post("/employees", async (req, res) => {
    try {
        const newEmployeeList = new employeeModelRoute({...req.body})
        const user = await newEmployeeList.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }

})



routes.get("/employees/:eid", async (req, res) => {
    //res.send({message: "Get Book By ID"})
    try {
        const getEmpByID = await employeeModelRoute.findById(req.params.eid)
        //await newBook.save()
        if(!getEmpByID){
            res.status(200).send("Employee not found")

    }
    res.status(200).send(getEmpByID)
}
     catch (error) {
        res.status(400).send(error)
}
})
routes.put("/employees/:eid", async (req, res) => {
    try {
        const editEmpDetails = await employeeModelRoute.findByIdAndUpdate(req.params.eid, req.body)
        
    res.status(200).send("Employee Updated")
    
}
     catch (error) {
        res.status(400).send(error)
} 
})

//Delete Employee By ID
routes.delete("/employees/:eid", async (req, res) => {
    //res.send({message: "Delete Employee By ID"})
    try {
        const deleteEmpbyID = await employeeModelRoute.findByIdAndDelete(req.params.eid)
        //await newBook.save()
        if(deleteEmpbyID){
            res.status(204).send("Employee Deleted")

    }
    else{
    res.status(200).send("Employee not deleted")
    }
}
     catch (error) {
        res.status(400).send(error)
} 
})




module.exports = routes
