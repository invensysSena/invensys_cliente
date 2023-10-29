import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;
export const serviceInventory = {

    getInventario: async (action) => await  ApiGet(urlServer, "inventory", "get", action, null),
    postInventario: async (action,data) => await  ApiPost(urlServer, "inventory", "post", action, data),
    deleteInventario : async (action, data) => await ApiDelete(urlServer, "inventory", "delete", action, data),   
    updateInventario : async (action,id, data) => await ApiPut(urlServer, "inventory", "put", action, data,id),   

}
    