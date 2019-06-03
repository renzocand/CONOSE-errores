const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let erroresSchema = new Schema({
    codigo: {
        type: Number,
        required: [true, 'El codigo es necesario']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es necesaria']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('Errores', erroresSchema);
