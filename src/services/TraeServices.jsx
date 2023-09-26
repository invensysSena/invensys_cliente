import { ApiGet, ApiPost, ApiPut } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;
export const TraeServices = {

    getTrae: async (action) => await  ApiGet(urlServer, "company", "get", action, null),
    updateCompany: async (action, data,_id) => await ApiPut(urlServer, "company", "put", action, data, _id),
    postTrae: async (action, data) => await ApiPost(urlServer, "company", "post", action, data, null),
}
    