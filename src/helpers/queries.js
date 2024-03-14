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

// export const editarProductoAPI = async (productoEditado) => {
//   try {
//     const respuesta = await fetch(`${URI_Producto}/${productoEditado.id}`, {
//         method: "PUT",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(productoEditado)
//     });
//     console.log(respuesta)
//     return respuesta
//   } catch (error) {
//     console.log(error);
//   }
// }

export const editarProductoAPI = async (productoEditado) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${productoEditado.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    throw new Error("Error al realizar la solicitud de edición");
  }
};

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

const userAdmin={
  email: "admin@rollingcoffee.com",
  password: "123Aa1233"
}

export const iniciarSesion = (usuario)=>{
 if(usuario.email === userAdmin.email && usuario.password === userAdmin.password){
  //loguear al usuario
  sessionStorage.setItem('loginRollingCoffee', JSON.stringify(userAdmin.email));
  return true;
 }else{
  return false;
 }
}