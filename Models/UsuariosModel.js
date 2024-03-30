const mongoose = require('mongoose');


const usuariosSchema = new mongoose.Schema({
    IdCliente: Number,
    nombre: String,
    correo: String,
    password: String
})

const Usuarios = mongoose.model('Usuarios', usuariosSchema);

module.exports = Usuarios;