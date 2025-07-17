import { generaToken } from '../utiles/seguridad.js'; 
// usuario hardcodeado.
// en un caso normal se debe ir a buscar los datos del isuario donde corresponda
const default_user = { id: 1, email: "user@email.com", password: "strongPass123" } ;

const login=async (req, res)=> {
    const { email, password } = req.body;
    // Verificar las credenciales del usuario
    
    if (email === default_user.email && password === default_user.password) {
        const token = generaToken(default_user); 
        res.send(token);
    } else { 
        res.status(401).json({ message: "Usuario invalido" });;
    }
}

export default {login};