import { config } from "dotenv";
config();
export const varEntorno={
    baseDatos:{
        apiKey:process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectID: process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID
    },
    puerto: process.env.PUERTO||5500,
    seguridad:{
        jwt_secret:process.env.JWT_SECRET_KEY,
        sesion: process.env.SESION
    }
}