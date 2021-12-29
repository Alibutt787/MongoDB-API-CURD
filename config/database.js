const mongose=require('mongoose');

const connectDatabase=()=>{
    mongose.connect(
              process.env.DB_URI,
              { useNewUrlParser: true, useUnifiedTopology: true }).then((d)=>{console.log(`connect  ${d.connection.host}`);}
              ).catch((err)=>{
                  console.log('noy');
              })
}

module.exports=connectDatabase;


