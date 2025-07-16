import 'dotenv/config';
import{ initializeApp } from "firebase/app"; 
import { getFirestore } from 'firebase/firestore'; 
const firebaseConfig = {
    apiKey: process.env.apiKey, 
    authDomain: process.env.AUTHDOMAIN, 
    projectId: "api-rest-node-js-data-25b28",
    storageBucket: process.env.STORAGEBUCKET, 
    messagingSenderId: "233133429277", 
    appId: process.env.APPID 
};
console.log(firebaseConfig);
// Inicializar Firebase 
// const app = initializeApp(firebaseConfig); 
// // Inicializar Firestore 
// const db = getFirestore(app); 
// export default db ;