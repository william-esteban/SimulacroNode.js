const passport = require('passport');
const { Strategy, ExtractJwt} = require('passport-jwt');
const Usuarios = require('../Models/UsuariosModel');

const jwt_secret = '##adsdsddsassadda##';

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret
    },

    async (jwtPayload, done) => {
        try {
            const user = await Usuarios.findById({IdCliente: jwtPayload.id})
            if (!user){
                const error = new Error('User not found')
                console.log(error);
            }
            done(null, user);
            
        } catch (error) {
            done(error);     
        }
    }
);

passport.use(strategy);

const initialize = () => {
    return passport.initialize();
};

const authenticate = () => {
    return passport.authenticate('jwt', {session: false})
};

module.exports = {
    initialize,
    authenticate
};




































// const passport = require('passport');
// const { Strategy, ExtractJwt } = require('passport-jwt');
// const Usuarios = require('../Models/UsuariosModel');

// const jwt_secret = '###assdadsadasd##';

// const strategy = new Strategy(
//     {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: jwt_secret
//     },

//     async (jwtPayload, done) => {
//         try {
//             const cliente  = await Usuarios.findById({userid: jwtPayload.id})
//             if(!cliente){
//                 const error = new Error('client not found')
//                 console.log(error);
//             }
//             done(null, cliente);

//         } catch (error) {
//             done(error)
//         }
//     }
// );

// passport.use(strategy);

// const initialize = () => {
//     return passport.initialize();
// };

// const authenticate = () => {
//     return passport.authenticate('jwt', {session: false});
// };

// module.exports = {
//     initialize,
//     authenticate
// };