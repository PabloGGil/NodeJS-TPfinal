import { generateToken } from '../utiles/GenToken.js'; 
// usuario hardcodeado.
// en un caso normal se debe ir a buscar los datos del isuario donde corresponda
const default_user = { id: 1, email: "user@email.com", password: "strongPass123" } ;

export async function login(req, res) {
    const { email, password } = req.body;
    // Verificar las credenciales del usuario
    
    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(user); 
        res.send(token);
    } else { 
        res.status(401).json({ message: "Usuario invalido" });;
    }
}