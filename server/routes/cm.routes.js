const express = require('express')
const app = express()
let Errores = require('../models/errores')

app.get('/cm', async (req, res) => {
    let codigo = req.query.codigo;
    let error = await Errores.find({
        codigo
    }, 'codigo descripcion')
    res.json(error)
})

app.get('/cmList', async (req, res) => {
    let errores = await Errores.find({
        estado: true
    }, 'codigo descripcion')
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