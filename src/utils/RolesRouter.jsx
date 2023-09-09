import axios from "axios";
import { dataIsAllowed } from "../secure/lowed.Modules";
import { urlServer } from "../urlApi/url";
export const rolesPemissionsRouter = async ()=>{
  let users = new Set();
    let usersData = {
    tokeVerify: "",
    permisions: [],
  };

  const token = sessionStorage.getItem("secure_token");
  const token1 = sessionStorage.getItem("token_token1");
  let type = sessionStorage.getItem("type");

  if(type === "user"){
    
    const response = await axios.get(`${urlServer}/getMod/${token1}`);
    response.length > 0 ? response.map((item)=>{
      usersData.permisions.push(item.titulo)
    }) : null
  }
  if(type === "administrador"){
    dataIsAllowed.map((item)=>{
     usersData.permisions.push(item.nombre)
    })
  }
  usersData.tokeVerify = token ? token : null;
  usersData.permisions.length > 0 ? sessionStorage.setItem("users",JSON.stringify(usersData)) : null
  return users.add(usersData);
}
let users = JSON.parse(sessionStorage.getItem("users"));
export let permissionsPages = users !== null ? users : false;