import axios from "axios";
import { dataIsAllowed } from "../auth/lowed.Modules";
import { getTokenAuth, } from "../auth/verifyAuth";
let accessToken = sessionStorage.getItem("secure_token");
import data from "../data/settings.json"
let urlServer = data[0].url_server;

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

export const getBusiness = async () =>
  await axios.get(`${urlServer}/modules/`, {
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

export const getSubProducts = async (id) =>
  await axios.get(`${urlServer}/subProducts/${id}`, {
    headers:getTokenAuth(),
  });

export const TodoFunctions = {
 

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
  
    updateCompany: async (_id, data) =>
    await axios.put(
      `${urlServer}/company/${_id}`,
      { data },
      {
        headers:getTokenAuth(),
      }
    ),

  getPedidos: async () =>
    await axios.get(`${urlServer}/pedidos`, {
     headers:getTokenAuth(),
    }),

  deleteEstadoNotificacion: async () =>
    await axios.delete(`${urlServer}/notificationTodoEstado`, {
     headers:getTokenAuth(),
    }),
  
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
