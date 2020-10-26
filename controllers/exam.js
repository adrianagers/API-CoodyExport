const ExamModel = require('../models/exam')

exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const exam = new ExamModel({
        tituloExamen: req.body.tituloExamen,
        descripcionExamen: req.body.descripcionExamen,
        lenguajeExamen: req.body.lenguajeExamen,
        linkExamen: req.body.linkExamen
    })
    exam.save()
        .then((dataExam) => { res.send(dataExam) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })

    }
    
    const exam = {
        tituloExamen: req.body.tituloExamen,
        descripcionExamen: req.body.descripcionExamen,
        lenguajeExamen: req.body.lenguajeExamen,
        linkExamen: req.body.linkExamen
    }
    
    ExamModel.findByIdAndUpdate(req.params.id, exam, { new: true })
        .then(
            (examUpdate) => {
                res.send(examUpdate)
            }
        ).catch(
            (error)=> {
                res.status(500).send({
                    message: error.message
                })
            }
        )    
}
