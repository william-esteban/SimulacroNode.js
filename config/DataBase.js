const mongoose = require('mongoose');
let Usuarios;

const connectDatabse = async () => {
    try {
        if(!Usuarios){
            Usuarios = mongoose.model('Usuarios', require('../Models/UsuariosModel').Schema);
        }

        await mongoose.connect('mongodb+srv://william271629:3233933777@registerandlogin.1jgszwb.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));

    } catch (error) {
        console.error('failed to connect to MongoDB', error);
        process.exit(1);    
    }
};





module.exports = connectDatabse;