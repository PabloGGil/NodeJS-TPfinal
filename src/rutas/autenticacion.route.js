import express from 'express'; 
import { login } from '../controladores/autenticacion.controller.js'; 
const router = express.Router(); 
router.post('/', login); 

export default router;