import { ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;

export const servicesProduct = {
    getSubProducts: async (action,params) => await ApiGet(urlServer, "subProducts", "get", action, params),
    getSubProductsIdAll: async (action,params) => await ApiGet(urlServer, "subProductsId", "get", action, params),
    translateProducts: async (action,data) => await ApiPost(urlServer, "translateProducts", "post", action, data),
    getProducts: async (action,params) => await ApiGet(urlServer, "getProducts", "get", action, params),
    UploadSubProducts: async (action,params) => await ApiPost(urlServer, "subProducts", "post", action, params),
    postProductos: async (action,data) => await ApiPost(urlServer, "createProducts", "post", action, data),
    updateProducto: async (action,data,id) => await ApiPut(urlServer, "updateProducts", "put", action, data,id),
    getProductsId: async (action,params) => await ApiGet(urlServer, "getProductsId", "get", action, params),
    deleteproducto: async (action,params) => await ApiPost(urlServer, "deleteProducts", "DELETE", action, params),
    getTranslateProducts: async (action,params) => await ApiGet(urlServer, "translateProducts", "get", action, params),
    updateSubproduct: async (action,data,id) => await ApiPut(urlServer, "translateSubProducts", "put", action, data,id),
    updateBodegaEmail: async (action,data,id) => await ApiPut(urlServer, "updateEmailBodega", "put", action, data,id),
    
    };
