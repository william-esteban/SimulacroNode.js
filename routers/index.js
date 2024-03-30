const express  = require('express');

// llamamos al enrutador a traves del metodo de router.

const router = express.Router();

// traemos el controller del usuario aca.
const usuariosController = require('../controlles/UsuariosController');

// aca estamos llamando al middleeware para la autenticacion del usuario.

const auth = require('../middleware/auth');

// llamar las rutas en el controller.

router.get('/api/m1/usuarios', auth.authenticate(), usuariosController.getAllclientes);
router.post('/register', usuariosController.register);
router.post('/login', usuariosController.login);

module.exports = router;


