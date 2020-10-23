module.exports = (app) => {//Exportar una funcion //recibimos el parametro app
    const company = require('../controllers/company')
    app.post('/company/create', company.create)
    app.put('/company/update/:id', company.update)
}