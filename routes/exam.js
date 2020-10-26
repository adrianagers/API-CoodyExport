module.exports = (app) => {
    const exam = require('../controllers/exam')
    app.post('/exam/create', exam.create)
    app.put('/exam/update/:id', exam.update)
    
}