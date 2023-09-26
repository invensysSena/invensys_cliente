
import { ApiGet, ApiPost, ApiPut, ApiPutFile } from "../apis/Api";
import data from "../data/settings.json"
let urlServer = data[0].url_server;
export const serviceUsers = {

  getDataAll: async (action) => ( await ApiGet(urlServer,"getAdminAll","get",action,"")),
  UpdateAdminAll: async (action,data) => await ApiPut(urlServer,"updateAdminALL","put",action,data,null),
  uploadImg: async (action,data) =>  await ApiPutFile(urlServer,"AuploadImageA","put",action,data,null),
  getUsersAdmin: async (action) => await ApiGet(urlServer,"getUsersData","get",action,""),
  PostDataUserRegister: async (action,data) => await ApiPut(urlServer,"registerUser","post",action,data,null),
  AuthGoogle: async (action,data) => await ApiPost(urlServer,"authgoogleAccount","post",action,data,null),
  PostDataAdmin: async (action,data) => await ApiPost(urlServer,"register","post",action,data,null),
  PostDataUser: async (action,data) => await ApiPost(urlServer,"registerUser","post",action,data,null),
  newPassword: async (action,data) => await ApiPut(urlServer,"newPass","put",action,data,null),
  postRecoveryEmail: async (action,data) => await ApiPost(urlServer,"recovery","post",action,data,null),
  recoverycode: async (action,data) => await ApiPost(urlServer,"recoverycode","post",action,data,null),
  DeleteModule: async (action,data) => await ApiPost(urlServer,"deleteModuleUser","post",action,data,null),
  DeleteuserPost : async (action,data) => await ApiPost(urlServer,"deleteUser","post",action,data,null),
  setModule: async (action,data) => await ApiPost(urlServer,"setModule","post",action,data,null),
  GetModule: async (action,params) => await ApiGet(urlServer,"getModuleUsers","get",action,params,{id:params}), 
  updateAdminALL: async (action,data) => await ApiPut(urlServer,"updateAdminALL","put",action,data,null), 
  UploadcsvUsuario: async (action,data) => await ApiPost(urlServer,"uploadcsvUsers","post",action,data,null),
  getDataAdmin: async (action) => await ApiGet(urlServer,"getsataAdminr","get",action,""),
  getPermissions: async (action) => await ApiGet(urlServer,"getPermisions","get",action,""),   
  typePermissionsModules: async (action,data) => await ApiPost(urlServer,"typePermissionsModulesUser","post",action,data,data),
  

}
    