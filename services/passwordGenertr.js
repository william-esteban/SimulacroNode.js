//  este código proporciona una función simple pero efectiva para generar contraseñas aleatorias con la longitud especificada.

const generatePassword = ( length = 8 ) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for ( let i = 0; i < length; i ++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

export default generatePassword;