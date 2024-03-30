const Usuarios = require('../Models/UsuariosModel');
const bcrypt = require('bcrypt');
const jwt = require('jwt');
const jwt_secret = require('###assdadsadasd##');

// vamos a crear el register y el login de nuestra pagina. //

const usuariosController = {

// obtener a los usuarios. GET

getAllclientes: async (req, res) => {
    try {
        const usuario = await Usuarios.find();
        res.json(usuario)
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

},

// registrar a los usuarios. POST

register: async (req, res) => {
    try {
        const clientes = await Usuarios.find();
        const {nombre ,correo ,password} = req.body;

        const clienteData = {
            IdCliente: clientes.length + 1,
            nombre: nombre,
            correo: correo,
            password: await bcrypt.hash(password, 10)
        }
        const newCliente = new Usuarios(clienteData);
        const savedCliente = await newCliente.save();
        res.status(500).json(savedCliente);
        
    } catch (error) {
        console.error('Error al crear los usuarios', error);
        res.status(500).json({ message: 'Internal Server Error' });
        
    }
},

// logear a los usuarios despues de registrarlos. POST

login: async (req, res) => {
    try {
        const { correo ,password } = req.body;
        const cliente = await Usuarios.findOne({correo: correo});

        if(!cliente) {
            return res.status(401).json({ message: 'invalid clientName or password'});
        }
        const ispasswordValid = await bcrypt.compare(password, cliente[0].password);

        if(!ispasswordValid) {
            return res.status(401).json({ message: 'invalid clientName or password'});
        }

        const token = jwt.sign({IdCliente: cliente.id}, jwt_secret,{
            expiresIn: '1h'
        })

        res.json({ message: 'logged in successfully', token})

    } catch (error) {
        console.error('Error al crear los usuarios', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

}

module.exports = usuariosController;