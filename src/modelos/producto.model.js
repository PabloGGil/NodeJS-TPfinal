// Modelo de producto

import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productosCollection = collection(db, "productos");

const getAllProductos = async () => {
  console.log("modelo");
  try {
    const productosList = await getDocs(productosCollection);
    const productos = [];
    productosList.forEach((doc) => productos.push({ id: doc.id, ...doc.data() }));

    return productos;
  } catch (error) {
    throw new Error("Error al leer", error.message);
  }
};



const getProdPorID = async (id) => {
try {
    const productosList = await getAllProductos();
    const prod=await productosList.find(prod=>prod.id==id);
    return prod;
} catch (error) {
    console.error('Error al buscar documento:', error);
    throw error;
  }
}

const CrearProducto = async (producto) => {
  try {
    const nuevoProduct = await addDoc(productosCollection, producto);
    return nuevoProduct;
  } catch (error) {
    throw new Error("Error en creacion", error.message);
  }
};

const EliminarProducto=async (idRef)=>{
  try{
    console.log(idRef);
    // const nuevoProduct = 
    const bb=doc(db, "productos",idRef);
    console.log(bb);
    await deleteDoc(bb);
    
    // return nuevoProduct;
  }catch(error){
    throw new Error("Error al borrar", error.message);
  }
}
export default {  getAllProductos , CrearProducto, getProdPorID , EliminarProducto};