import { ApiDelete, ApiGet, ApiPost, ApiPut,  } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;
export const servicesCategory = {

    getBusiness: async (action) => await  ApiGet(urlServer, "modules", "get", action, null),
    getCompras: async (action,params) => await  ApiGet(urlServer, "compras", "get", action, params),
    postPedidos : async (action, data) => await ApiPost(urlServer, "pedidos", "post", action, data), 
    getCategorias: async (action) => await ApiGet(urlServer, "category", "get", action, null), 
    postCategorias: async (action, data) => await ApiPost(urlServer, "category", "post", action, data), 
    deleteCategory: async (action, params) => await ApiDelete(urlServer, 'category', "delete", action, params),
    updateCategorias: async (action, data, params) => await ApiPut(urlServer, "category", "put", action, data, params),

}
    