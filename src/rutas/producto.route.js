//router
import { Router } from "express";
import productoController from "../controladores/producto.controller.js";
import {autenticacion} from "../middleware/autentica.middleware.js";


const router = Router();

router.get("/",productoController.getProductos);
router.get("/:id", productoController.getProductoPorId);
router.post("/create/", autenticacion,productoController.crearProducto);
router.delete("/:id", productoController.borrarProducto);
export default router;
