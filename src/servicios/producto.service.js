// Capa de servicios de producto
import productos from "../modelos/producto.model.js";
// { getAllProductos, saveProductos } 

const getAll = async () => {
  return await productos.getAllProductos();
};

const getProdPorID = async (id) => {
  console.log("servicio " + id)
  // const productos= await productos.getAll();
   const prod=await productos.getProdPorID(id);
   console.log(prod);
   return prod;
};

const crearProducto = async (producto) => {
  return await productos.CrearProducto(producto);
};

const eliminarProducto = async (idProd) => {
  return await productos.EliminarProducto(idProd);
};
export default { getAll, crearProducto, getProdPorID, eliminarProducto};
