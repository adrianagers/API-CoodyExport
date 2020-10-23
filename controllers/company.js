const CompanyModel =require('../models/company') //estamos requiriendo el modelo

exports.create = (req, res) => {
    //validamos que todos los datos del formulario esten llenos 
    //Object.entries= identificar cuales son los datos que tiene ese objeto
    if (Object.entries(req.body).length == 0) {
       return res.status(400).send({
          message: 'los datos son obligatorios'

      })
    }
//vamos a crear una nueva empresa
    const company = new CompanyModel({
        nameCompany: req.body.nameCompany,
        nitCompany:  req.body.nitCompany,
        phoneCompany:  req.body.phoneCompany,
        email: req.body.email,
        password:req.body.password
    })
    


   
    company.save()// save metodo de mongoose
        .then((dataCompany) => { res.send(dataCompany) })//si hace esto bien
        .catch((error) => {//si no ejecute el cath
            res.status(500).send({//estado 500 (error de servidor)-send
                message: error.message//este mensaje devolvera el error que mongoose tiene 
            })
        })
}

/**
 * Metodo para actualizar una empresa
 */

 exports.update=(req,res)=>{
     //validacion de que todos los campos que se van a actualizar esten llenos 
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'

        })
    }


    const company = {
        nameCompany: req.body.nameCompany,
        nitCompany:  req.body.nitCompany,
        phoneCompany:  req.body.phoneCompany,
        email: req.body.email,
        password:req.body.password
 }
 //findByIdAndUpdate= metodo de mongoose que permite buscar por id y actualizar
 CompanyModel.findByIdAndUpdate(req.params.id, company)
        .then(
            (companyUpdate) => {
                res.send(companyUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}