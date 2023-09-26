import { ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;

export const servecesProduct = {
    getSubProducts: async (action,params) => await ApiGet(urlServer, "subProducts", "get", action, params),
   
    };
