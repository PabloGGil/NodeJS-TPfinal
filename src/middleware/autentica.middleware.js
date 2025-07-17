import { verificaToken, generaToken } from "../utiles/seguridad.js";

const secret_key = process.env.JWT_SECRET_KEY; 
// Middleware para verificar el token JWT 

export const autenticacion = (req, res, next) => { 
    console.log(req.headers)
    const token = req.headers['authorization'].split(" ")[1]; 
    console.log(token)
    if (!token) return res.sendStatus(401); 
    const tokenStat=verificaToken(token);
    if(!tokenStat.valido) return res.sendStatus(403);
    console.log(tokenStat.decript)
    req.user=tokenStat.decript;
    next();
}

export default {autenticacion}