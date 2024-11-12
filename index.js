const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./backend/connectMongo.js');
const userRoutes = require('./backend/routes/user.routes.js');
const cors = require('cors')
const app = express();

 require('dotenv').config();
 connectDB()

 app.use(cors())
 app.use(bodyParser.json());



 app.use('/auth',userRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server has started with port:${process.env.PORT}`)
})
