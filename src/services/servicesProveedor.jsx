import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;

export const servicesProveedor = {
    getProveedores: async (action) => await ApiGet(urlServer, "providers", "get", action, null),
    postProveedores: async (action, data) => await ApiPost(urlServer, "providers", "post", action, data),
    deleteProveedores: async (action, params) => await ApiDelete(urlServer, "providers", "delete", action, params),
    updateProveedores: async (action, data) => await ApiPut(urlServer, "proveedor", "put", action, data),
    getProveedorById: async (action, params) => await ApiGet(urlServer, "proveedor", "get", action, params),
    putProviders: async (action, data, params) => await ApiPut(urlServer, "providers", "put", action, data, params),
    };
