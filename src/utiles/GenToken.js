import jwt from 'jsonwebtoken'; 
import {config} from "dotenv"; 
config();
const secret_key = process.env.JWT_SECRET_KEY;
console.log(secret_key) // Función para generar un token JWT 
export const generateToken = (userData) => {
     const user = {
        id: userData.id, 
        email: userData.email
    }; 
    const expiration = { expiresIn: '1h' }; 
    return jwt.sign(user, secret_key, expiration); 
}