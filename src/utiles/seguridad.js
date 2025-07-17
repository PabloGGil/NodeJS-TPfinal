import jwt from 'jsonwebtoken'; 
import {varEntorno} from "../config/varEntorno.js"; 
// config();
const secret_key = varEntorno.seguridad.jwt_secret;
console.log(secret_key) // Función para generar un token JWT 
export const generaToken = (userData) => {
    const user = {
        id: userData.id, 
        email: userData.email
    }; 
    const expiration = { expiresIn: '1h' }; 
    return jwt.sign(user, secret_key, expiration); 
}

export const verificaToken=(token)=>{
    try{
        const decript=jwt.verify(token,jwt_secret);
        return {valido:true,decript};
    }catch(error){
        return {valido:false,message:error.message};
    }
}