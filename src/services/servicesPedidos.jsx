import { ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;
export const servicesPedidos = {

    getBusiness: async (action) => await  ApiGet(urlServer, "modules", "get", action, null),
    getCompras: async (action,params) => await  ApiGet(urlServer, "compras", "get", action, params),
    postPedidos : async (action, data) => await ApiPost(urlServer, "pedidos", "post", action, data),   

}
    