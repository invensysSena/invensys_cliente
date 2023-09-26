import { ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;

export const servicesProveedor = {
    getProveedor: async (action) => await ApiGet(urlServer, "providers", "get", action, null),
    postProveedor: async (action, data) => await ApiPost(urlServer, "proveedor", "post", action, data),
    putProveedor: async (action, data) => await ApiPut(urlServer, "proveedor", "put", action, data),
    deleteProveedor: async (action, data) => await ApiPut(urlServer, "proveedor", "delete", action, data),
    getProveedorById: async (action, params) => await ApiGet(urlServer, "proveedor", "get", action, params)
    };
