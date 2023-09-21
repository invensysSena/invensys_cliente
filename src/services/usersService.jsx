import { urlServer } from "../urlApi/url";
import { ApiGet, ApiPut, ApiPutFile } from "../apis/Api";
export const serviceUsers = {

  getDataAll: async (action) =>( await ApiGet(urlServer,"getAdminAll","get",action,"tt")),
  UpdateAdminAll: async (action,data) => await ApiPut(urlServer,"updateAdminALL","put",action,data,null),
  uploadImg: async (action,data) =>  await ApiPutFile(urlServer,"AuploadImageA","put",action,data,null),


}
    