import axios from "axios";
import { urlServer } from "../urlApi/url";
import { dataIsAllowed } from "../secure/lowed.Modules";
let accessToken = sessionStorage.getItem("secure_token");
let accesToken1 = sessionStorage.getItem("token_token1");
let type = sessionStorage.getItem("type");
import { getTokenAuth, getTokenAuthImg } from "../auth/verifyAuth";
export const PostDataUser = async (postDataUser) =>
  await axios.post(`${urlServer}/login`, { postDataUser });
export const postRecoveryEmail = async (email) =>
  await axios.post(`${urlServer}/recovery`, { email });
export const recoverycode = async (data) =>
  await axios.post(`${urlServer}/recoverycode`, { data });
export const newPassword = async (data) =>
  await axios.post(`${urlServer}/newPass`, { data });
export const AuthGoogle = async (data) =>{
  const queryParams = new URLSearchParams(data).toString();
  const url = `${urlServer}/authgoogleAccount?${queryParams}`;
  return await axios.post(url);
}


export const PostDataAdmin = async (data) =>{

  const queryParams = new URLSearchParams(data).toString();
  const url = `${urlServer}/register?${queryParams}`;
  return await axios.post(url);
}

export const getDataAdmin = async (tokenData) =>
  await axios.post(`${urlServer}/getsataAdminr/${tokenData}`, {
    headers:getTokenAuth(),
  });
export const getDataAll = async () =>
  await axios.get(`${urlServer}/getAdminAll/${accessToken}`, {
    headers:getTokenAuth(),
  });

export const tokenData = async (tokenData, token) =>
  await axios.post(
    `${urlServer}/register`,
    { tokenData },
    {
      headers:getTokenAuth(),
    }
  );
export const PostDataUserRegister = async (postDataUserRegister) =>
  await axios.post(
    `${urlServer}/registerUser`,
    { postDataUserRegister },
    {
     headers:getTokenAuth(),
    }
  );
export const UploadcsvUsuario = async (formDataCsv, archivousuariocsv) =>
  await axios.post(
    `${urlServer}/uploadcsvUsers`,
    { formDataCsv, archivousuariocsv },
    {
      headers: {
        authorization: accessToken,
        role: dataIsAllowed[0].nombre,
        "Content-Type": "multipart/form-data",
      },
    }
  );

export const getUsersAdmin = async () =>
  await axios.get(`${urlServer}/getUsersData`, {
    headers:getTokenAuth(),
  });


export const DeleteuserPost = async (deleteData) =>
  await axios.post(
    `${urlServer}/deleteUser`,
    { deleteData },
    {
     headers:getTokenAuth(),
    }
  );

export const setModule = async (path,iduser,idmodule) =>
  await axios.post(
    `${urlServer}/setModule`,
    { path,iduser,idmodule },
    {
     headers:getTokenAuth(),
    }
  );
export const GetModule = async (id) =>
  await axios.get(`${urlServer}/getModuleUsers/${id}`, {
    headers:getTokenAuth(),
  });
export const DeleteModule = async (id) =>
  await axios.post(
    `${urlServer}/deleteModuleUser`,
    { id },
    {
     headers:getTokenAuth(),
    }
  );
// ? Path: src\apis\ApiData.jsx subir imagen ADMINISTRADORE
export const uploadImg = async (imgData) =>
  await axios.put(
    `${urlServer}/AuploadImageA`,
    { imgData },
    {
      headers: getTokenAuthImg()
    }
  );

// ? Path: src\apis\ApiData.jsx actualizar datos ADMINISTRADORE

export const UpdateAdminAll = async (data) =>
  await axios.put(
    `${urlServer}/updateAdminALL`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

// ? post categorias
export const postCategorias = async (data) =>
  await axios.post(
    `${urlServer}/category`,
    { data },
    {
      headers:getTokenAuth(),
    }
  );

// ? delete category
export const deleteCategory = async (id) =>
  await axios.delete(`${urlServer}/category/${id}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx obtener todas la categorias
export const getCategorias = async () =>
  await axios.get(`${urlServer}/category/${accessToken}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx actualizar categorias
export const updateCategorias = async (id, data) =>
  await axios.put(
    `${urlServer}/category/${id}`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );
// ? obtiene todos los productos
export const getProducts = async () =>
  await axios.get(`${urlServer}/getProducts/${accessToken}`, {
    headers:getTokenAuth(),
  });
// ? insertar productos validación del token
export const postProductos = async (data) =>
  await axios.post(
    `${urlServer}/createProducts`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

export const deleteproducto = async (id) =>
  await axios.delete(`${urlServer}/deleteProducts/${id}`, {
    headers:getTokenAuth(),
  });
// ? Update product
export const updateProducto = async (id, data) =>
  await axios.put(
    `${urlServer}/updateProducts/${id}`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

export const getProductsId = async (id) =>
  await axios.get(`${urlServer}/getProductsId/${id}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx get Proveedores
export const getProveedores = async () =>
  await axios.get(`${urlServer}/providers/${accessToken}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx post Proveedores
export const postProveedores = async (data) =>
  await axios.post(
    `${urlServer}/providers`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

// ? Path: src\apis\ApiData.jsx delete Proveedores
export const deleteProveedores = async (id) =>
  await axios.delete(`${urlServer}/providers/${id}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx update Proveedores
export const updateProveedores = async (id, data) =>
  await axios.put(
    `${urlServer}/providers/${id}`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

// ? Path: src\apis\ApiData.jsx get datos de su negocio
export const getBusiness = async () =>
  await axios.get(`${urlServer}/modules/${accessToken}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx obtiene todos los servicios datos dek usuario
export const getServices = async (id) =>
  await axios.get(`${urlServer}/serviceId/${id}`, {
    headers:getTokenAuth(),
  });

//  ? Path: src\apis\ApiData.jsx obtine todas las motificaciones
export const getNotification = async () =>
  await axios.get(`${urlServer}/notification/${accessToken}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx DELETE motificaciones
export const deleteNotification = async (id) =>
  await axios.delete(`${urlServer}/notification/${id}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx get inventario
export const getInventario = async () =>
  await axios.get(`${urlServer}/inventory/${accessToken}`, {
    headers:getTokenAuth(),
  });

// ? Path: src\apis\ApiData.jsx post inventario
export const postInventario = async (data) =>
  await axios.post(
    `${urlServer}/inventory`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

// ? Path: src\apis\ApiData.jsx delete inventario
export const deleteInventario = async (id) =>
  await axios.delete(`${urlServer}/inventory/${id}`, {
    headers:getTokenAuth(),
  });
// ? Path: src\apis\ApiData.jsx update inventario
export const updateInventario = async (id, data) =>
  await axios.put(
    `${urlServer}/inventory/${id}`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

// ? Path: src\apis\ApiData.jsx get ventas
export const UploadSubProducts = async (id, data) =>
  await axios.post(
    `${urlServer}/subProducts`,
    { data },
    {
     headers:getTokenAuth(),
    }
  );

export const getSubProducts = async (id) =>
  await axios.get(`${urlServer}/subProducts/${id}`, {
    headers:getTokenAuth(),
  });

export const TodoFunctions = {
  // ? Path: src\apis\ApiData.jsx Translate Products
  translateProducts: async (data) =>
    await axios.post(
      `${urlServer}/translateProducts`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),

  // ? Path: src\apis\ApiData.jsx Get Translate Products
  getTranslateProducts: async (id) =>
    await axios.get(`${urlServer}/translateProducts/${id}`, {
     headers:getTokenAuth(),
    }),

  // ? Path: src\apis\ApiData.jsx updateSubproduct with TranslateProduct

  updateSubproduct: async (id, data) =>
    await axios.put(
      `${urlServer}/translateSubProducts/${id}`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),

  updateBodegaEmail: async (id, data) =>
    await axios.put(
      `${urlServer}/updateEmailBodega/${id}`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),

  postPedidos: async (data) =>
    await axios.post(
      `${urlServer}/pedidos`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),
  postCompras: async (data) =>
    await axios.post(
      `${urlServer}/compras`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),
  getCompras: async (id) =>
    await axios.get(`${urlServer}/compras/${id}`, {
     headers:getTokenAuth(),
    }),
  getPedidoId: async (id) =>
    await axios.get(`${urlServer}/pedidos/${id}`, {
     headers:getTokenAuth(),
    }),
  getComprasFv: async () =>
    await axios.get(`${urlServer}/comprasfv`, {
     headers:getTokenAuth(),
    }),
  postTrae: async (data) =>
    await axios.post(
      `${urlServer}/company`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),
  getTrae: async () =>
    await axios.get(`${urlServer}/company`, {
     headers:getTokenAuth(),
    }),
  getPedidos: async () =>
    await axios.get(`${urlServer}/pedidos`, {
     headers:getTokenAuth(),
    }),

  deleteEstadoNotificacion: async () =>
    await axios.delete(`${urlServer}/notificationTodoEstado`, {
     headers:getTokenAuth(),
    }),
   
    
    typePermissionsModules: async (id,path, method) => {
      try {
        let {pathrouter} = path

        let {idmodule} = id
        const query = { idmodule,pathrouter, method };
        const queryParams = new URLSearchParams(query).toString();
        const response = await axios.post(`${urlServer}/typePermissionsModulesUser?${queryParams}`, null, {
         headers:getTokenAuth(),
        });
        return response.data; // Devuelve los datos de la respuesta si es necesario.
      } catch (error) {
        // Maneja cualquier error aquí
        console.error('Error en la solicitud:', error);
        throw error; // Puedes relanzar el error o manejarlo según tus necesidades.
      }
    },
  SearchDismiutionUnidadProduct: async () =>
    await axios.get(`${urlServer}/disminucionUnidades`, {
     headers:getTokenAuth(),
    }),
  licenceSoftwareCreate: async (id, moneyPrice, data) =>
    await axios.post(
      `${urlServer}/createLicence/${accessToken}`,
      {
        id,
        moneyPrice,
        data,
      },
      {
        headers:getTokenAuth(),
      }
    ),

  getLicenceSoftware: async () =>
    await axios.get(`${urlServer}/getLicence/${accessToken}`, {
     headers:getTokenAuth(),
    }),
  getPermissions: async () =>
    await axios.get(`${urlServer}/getPermisions`, {
     headers:getTokenAuth(),
    }),

  putProviders: async (id, data) =>
    await axios.put(
      `${urlServer}/providers/${id}`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),

  putEmailUser: async (id, data) =>
    await axios.put(
      `${urlServer}/updateEmailUser/${id}`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),
  putPassUser: async (id, data) =>
    await axios.put(
      `${urlServer}/updatePassUser/${id}`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),

  putAdminPass: async () =>
    await axios.put(`${urlServer}/updateAdminPass`, {
     headers:getTokenAuth(),
    }),
};
