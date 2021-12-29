
const app = require('./app');
 const dotenv= require('dotenv');
const path = require('path');
const connectDatabase =require('./config/database')
//config
dotenv.config({path:"backend/config/config.env"})

connectDatabase();
app.listen(process.env.port,()=>{
    console.log(`Port is listen runing at http://localhost:${process.env.port}`)
});
