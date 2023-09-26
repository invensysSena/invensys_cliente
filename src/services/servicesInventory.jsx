import { ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;

export const servicesInventory = {
    getInventario: async (action) => await ApiGet(urlServer, "inventory", "get", action, null),
   
    };
