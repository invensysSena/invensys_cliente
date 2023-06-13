import axios from "axios";
import { urlServer } from "../urlApi/url";
import { dataIsAllowed } from "../secure/lowed.Modules";
let accessToken = localStorage.getItem("secure_token");
let accesToken1 = localStorage.getItem("token_token1");
let type = localStorage.getItem("type");
export const PostDataUser = async (postDataUser) =>
  await axios.post(`${urlServer}/login`, { postDataUser });
export const postRecoveryEmail = async (email) =>
  await axios.post(`${urlServer}/recovery`, { email });
export const recoverycode = async (data) =>
  await axios.post(`${urlServer}/recoverycode`, { data });
export const newPassword = async (data) =>
  await axios.post(`${urlServer}/newPass`, { data });
export const AuthGoogle = async (data) =>
  await axios.post(`${urlServer}/authgoogleAccount`, { data });
export const PostDataAdmin = async (postDataAdmin) =>
  await axios.post(`${urlServer}/register`, { postDataAdmin });
export const getDataAdmin = async (tokenData) =>
  await axios.post(`${urlServer}/getsataAdminr/${tokenData}`, {
    headers: {
      authorization: tokenData,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });
export const getDataAll = async () =>
  await axios.get(`${urlServer}/getAdminAll/${accessToken}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

export const tokenData = async (tokenData, token) =>
  await axios.post(
    `${urlServer}/register`,
    { tokenData },
    {
      headers: {
        authorization: token,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );
export const PostDataUserRegister = async (postDataUserRegister) =>
  await axios.post(
    `${urlServer}/registerUser`,
    { postDataUserRegister },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );
export const UploadcsvUsuario = async (formDataCsv, archivousuariocsv) =>
  await axios.post(
    `${urlServer}/uploadcsvUsers`,
    { formDataCsv, archivousuariocsv },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
        "Content-Type": "multipart/form-data",
      },
    }
  );

export const getUsersAdmin = async () =>
  await axios.get(`${urlServer}/getUsersData/${accessToken}`, {
    headers: {
      isAllowedAccess: dataIsAllowed[0].nombre,
      authorization: accessToken,
    },
  });
export const getDataCountUsersAdmin = async (isAllowedToken) =>
  await axios.get(`${urlServer}/countUsers/${isAllowedToken}`, {
    headers: {
      isAllowedAccess: dataIsAllowed[0].nombre,
      authorization: isAllowedToken,
    },
  });

export const DeleteuserPost = async (deleteData) =>
  await axios.post(
    `${urlServer}/deleteUser`,
    { deleteData },
    {
      headers: {
        isAllowedAccess: dataIsAllowed[0].nombre,
        authorization: accessToken,
      },
    }
  );

export const setModule = async (data) =>
  await axios.post(
    `${urlServer}/setModule`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );
export const GetModule = async (id) =>
  await axios.get(`${urlServer}/getModuleUsers/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });
export const DeleteModule = async (id) =>
  await axios.post(
    `${urlServer}/deleteModuleUser`,
    { id },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );
// ? Path: src\apis\ApiData.jsx subir imagen ADMINISTRADORE
export const uploadImg = async (imgData) =>
  await axios.put(
    `${urlServer}/AuploadImageA`,
    { imgData },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
        "Content-Type": "multipart/form-data",
        // application/x-www-form-urlencoded

        // "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

// ? Path: src\apis\ApiData.jsx actualizar datos ADMINISTRADORE

export const UpdateAdminAll = async (data) =>
  await axios.put(
    `${urlServer}/updateAdminALL`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

// ? post categorias
export const postCategorias = async (data) =>
  await axios.post(
    `${urlServer}/category`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

// ? delete category
export const deleteCategory = async (id) =>
  await axios.delete(`${urlServer}/category/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx obtener todas la categorias
export const getCategorias = async () =>
  await axios.get(`${urlServer}/category/${accessToken}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx actualizar categorias
export const updateCategorias = async (id, data) =>
  await axios.put(
    `${urlServer}/category/${id}`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );
// ? obtiene todos los productos
export const getProducts = async () =>
  await axios.get(`${urlServer}/getProducts/${accessToken}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });
// ? insertar productos validación del token
export const postProductos = async (data) =>
  await axios.post(
    `${urlServer}/createProducts`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

export const deleteproducto = async (id) =>
  await axios.delete(`${urlServer}/deleteProducts/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });
// ? Update product
export const updateProducto = async (id, data) =>
  await axios.put(
    `${urlServer}/updateProducts/${id}`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

export const getProductsId = async (id) =>
  await axios.get(`${urlServer}/getProductsId/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx get Proveedores
export const getProveedores = async () =>
  await axios.get(`${urlServer}/providers/${accessToken}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx post Proveedores
export const postProveedores = async (data) =>
  await axios.post(
    `${urlServer}/providers`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx delete Proveedores
export const deleteProveedores = async (id) =>
  await axios.delete(`${urlServer}/providers/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx update Proveedores
export const updateProveedores = async (id, data) =>
  await axios.put(
    `${urlServer}/providers/${id}`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx get datos de su negocio
export const getBusiness = async () =>
  await axios.get(`${urlServer}/modules/${accessToken}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx obtiene todos los servicios datos dek usuario
export const getServices = async (id) =>
  await axios.get(`${urlServer}/serviceId/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

//  ? Path: src\apis\ApiData.jsx obtine todas las motificaciones
export const getNotification = async () =>
  await axios.get(`${urlServer}/notification/${accessToken}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx DELETE motificaciones
export const deleteNotification = async (id) =>
  await axios.delete(`${urlServer}/notification/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx get inventario
export const getInventario = async () =>
  await axios.get(`${urlServer}/inventory/${accessToken}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

// ? Path: src\apis\ApiData.jsx post inventario
export const postInventario = async (data) =>
  await axios.post(
    `${urlServer}/inventory`,
    { data },
    {
      headers: {
        authorization: accessToken,
        typeAutorization: type,
        authorization1: accesToken1,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx delete inventario
export const deleteInventario = async (id) =>
  await axios.delete(`${urlServer}/inventory/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });
// ? Path: src\apis\ApiData.jsx update inventario
export const updateInventario = async (id, data) =>
  await axios.put(
    `${urlServer}/inventory/${id}`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

// ? Path: src\apis\ApiData.jsx get ventas
export const UploadSubProducts = async (id, data) =>
  await axios.post(
    `${urlServer}/subProducts`,
    { data },
    {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }
  );

export const getSubProducts = async (id) =>
  await axios.get(`${urlServer}/subProducts/${id}`, {
    headers: {
      authorization: accessToken,
      isAllowedAccess: dataIsAllowed[0].nombre,
    },
  });

export const TodoFunctions = {
  // ? Path: src\apis\ApiData.jsx Translate Products
  translateProducts: async (data) =>
    await axios.post(
      `${urlServer}/translateProducts`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),

  // ? Path: src\apis\ApiData.jsx Get Translate Products
  getTranslateProducts: async (id) =>
    await axios.get(`${urlServer}/translateProducts/${id}`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),

  // ? Path: src\apis\ApiData.jsx updateSubproduct with TranslateProduct

  updateSubproduct: async (id, data) =>
    await axios.put(
      `${urlServer}/translateSubProducts/${id}`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),

  updateBodegaEmail: async (id, data) =>
    await axios.put(
      `${urlServer}/updateEmailBodega/${id}`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),

  postPedidos: async (data) =>
    await axios.post(
      `${urlServer}/pedidos`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),
  postCompras: async (data) =>
    await axios.post(
      `${urlServer}/compras`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),
  getCompras: async (id) =>
    await axios.get(`${urlServer}/compras/${id}`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),
  getComprasFv: async () =>
    await axios.get(`${urlServer}/comprasfv`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),
  postTrae: async (data) =>
    await axios.post(
      `${urlServer}/company`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),
  getTrae: async () =>
    await axios.get(`${urlServer}/company`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),
  getPedidos: async () =>
    await axios.get(`${urlServer}/pedidos`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),

  deleteEstadoNotificacion: async () =>
    await axios.delete(`${urlServer}/notificationTodoEstado`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),
  SearchDismiutionUnidadProduct: async () =>
    await axios.get(`${urlServer}/disminucionUnidades`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
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
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),

  getLicenceSoftware: async () =>
    await axios.get(`${urlServer}/getLicence/${accessToken}`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),

  putProviders: async (id, data) =>
    await axios.put(
      `${urlServer}/providers/${id}`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),

  putEmailUser: async (id, data) =>
    await axios.put(
      `${urlServer}/updateEmailUser/${id}`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),
  putPassUser: async (id, data) =>
    await axios.put(
      `${urlServer}/updatePassUser/${id}`,
      { data },
      {
        headers: {
          authorization: accessToken,
          isAllowedAccess: dataIsAllowed[0].nombre,
        },
      }
    ),

  putAdminPass: async () =>
    await axios.put(`${urlServer}/updateAdminPass`, {
      headers: {
        authorization: accessToken,
        isAllowedAccess: dataIsAllowed[0].nombre,
      },
    }),
};
