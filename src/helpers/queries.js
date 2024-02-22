const URI_Producto = import.meta.env.VITE_API_PRODUCTO;

console.log(URI_Producto);

// POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URI_Producto, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoNuevo)
    });
    return respuesta
  } catch (error) {
    console.log(error);
  }
};

// GET
export const obtenerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URI_Producto);
    const productos = await respuesta.json();
    return productos;
  } catch (error) {
    console.log(error);
  }
}

// DELETE

export const eliminarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`, {
        method: "DELETE"
    });
    return respuesta
  } catch (error) {
    console.log(error);
  }
}

// EDIT

export const editarProductoAPI = async (productoEditado) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${productoEditado.id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoEditado)
    });
    return respuesta
  } catch (error) {
    console.log(error);
  }
}

// GET BY ID

export const obtenerProductoPorIdAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`);
    const producto = await respuesta.json();
    return producto;
  } catch (error) {
    console.log(error);
  }
}