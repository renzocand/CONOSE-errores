const express = require('express')
const app = express()
let Errores = require('../models/errores')

app.get('/', async (req, res) => {
    let codigo = req.query.cm;
    let error = await Errores.find({
        codigo
    }, '-_id codigo descripcion')
    res.json(error)
})

app.get('/cmList', async (req, res) => {
    let errores = await Errores.find({}, '-_id codigo descripcion ')
    res.json(errores)
})

app.post('/cm', async (req, res) => {
    let body = req.body
    try {
        let erroresDB = new Errores({
            codigo: body.codigo,
            descripcion: body.descripcion
        });
        await erroresDB.save()

        res.json({
            ok: true,
            mensaje: 'se creo el codigo de mensaje correctamente',
            erroresDB
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
})

module.exports = app;