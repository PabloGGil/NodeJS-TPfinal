import express from "express";
import {config} from "dotenv";
import cors from "cors";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import productoRoute from "./rutas/producto.route.js";
import autenticacionRoute from "./rutas/autenticacion.route.js";
// import midAutenticacion from "./middleware/autentica.middleware.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), ".");
const corsOptions = {
  origin: [
    'http://localhost:5500', 
    'https://localhost:5500',
    'http://localhost:3000', // para desarrollo
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
};

config();
const app = express();
const port= process.env.PUERTO || 3000;


// -------- middlewares ----------------------------
// parsear las solicitudes JSON
app.use(express.json());

app.use(express.static(join(__dirname, "public")));
// parsear formularios html
app.use(express.urlencoded({ extended: true }));
// Habilitar CORS 
app.use(cors(corsOptions));
console.log (typeof midAutenticacion)
//---------------------------------------------------

// ---------- Rutas ---------------------------------
// default ó pagina de inicio
app.get("/", (req, res) => {
  console.log("ruta por defecto")
  res.sendFile(join(__dirname,"public","index.html"));
  res.send(JSON.stringify({ title: "Pagina de Inicio" }));
  // next();
});
// app.use(midAutenticacion);

app.use("/auth",autenticacionRoute);
// rutas de producto 
app.use("/api/products",productoRoute); 
// app.use("/auth/login",autorizacionRoute);

// ---------- manejo de errores --------------------
app.use((req, res, next) => { res.status(404).send('Recurso no encontrado o ruta inválida'); });


// ---------- listener
app.listen(port, () => {
  console.log(`El servidor esta escuchando en http://localhost:${port}`);
});
