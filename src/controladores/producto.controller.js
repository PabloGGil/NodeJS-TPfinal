// Controlador de productos

import productoService from "../servicios/producto.service.js";

const getProductos = async (req, res) => {
  try {
    const products = await productoService.getAll();
    res
    .status(200)
    .json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const getProductoPorId = async (req, res) => {
  let id=req.params.id;
  console.log(id);
  try {
    const product = await productoService.getProdPorID(id);
    if(!product){
      return res
              .status(404)
              .json({mensaje:"no se encontro el producto " + id })
    }
    return res
            .status(200)
            .json({ message: "Producto", payload: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const crearProducto = async (req, res) => {
  try {   
    const { descripcion,categoria,precio, stock, nombre } = req.body;
    // Validaciones de campos
    // validamos que hayan enviado el campo nombre
    if(typeof(nombre)==='undefined' || nombre===null){
      res.status(200).json({ message: "Falta el nombre" });
      return;
    } 
    const ProductoNuevo = {
      nombre:nombre,
      precio: precio,
      descripcion: descripcion,
      categoria:categoria,
      stock:stock
    };
 
    await productoService.crearProducto(ProductoNuevo);
    res.status(200).json({ message: "Producto Agregado", payload: ProductoNuevo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const borrarProducto= async (req,res)=>{
  try {
    const id=req.params.id;
    const products = await productoService.eliminarProducto(id);
    res
    .status(200)
    .json({ message: "Producto eliminado", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

export default { getProductos, crearProducto, getProductoPorId, borrarProducto };
