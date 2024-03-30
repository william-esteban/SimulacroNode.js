const mongoose = require('mongoose');
let Usuarios;

const connectDatabse = async () => {
    try {
        if(!Usuarios){
            Usuarios = mongoose.model('Usuarios', require('../Models/UsuariosModel').Schema);
        }

        await mongoose.connect('mongodb+srv://william271629:3218741020@clusternotasdb.6dhty9c.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));

    } catch (error) {
        console.error('failed to connect to MongoDB', error);
        process.exit(1);    
    }
};




module.exports = connectDatabse;