import express from 'express'; 
import autenticaController from '../controladores/seguridad.controller.js'; 
const router = express.Router(); 
router.post('/login', autenticaController.login); 

export default router;