const mongoose =require('mongoose');
const conectDB = ()=>{
   
    mongoose.connect('',{
        useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
            if(error){
                console.log('Error',error)
            }else{
                console.log('Nos conectamos con exito a la DB de coodyExpert.')
            }
        })
}

module.exports={conectDB} 