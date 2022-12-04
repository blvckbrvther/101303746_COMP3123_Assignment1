const bodyParser = require("body-parser");
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const userRoutes = require('./Routes/users')
const employeeRoute = require('./Routes/employeeroute')
const DB_URL = "mongodb+srv://blvckbrvther:Olayinka1_@cluster0.vxrfs3s.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"
mongoose.connect(DB_URL,{
    useNewUrlParser: true,
     useUnifiedTopology: true
})
app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
app.use("/api/user", userRoutes);
app.use("/api/emp", employeeRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

