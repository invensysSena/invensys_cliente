
import { dataIsAllowed } from "./lowed.Modules";
import { serviceUsers } from "../services/usersService";
export const rolesPemissionsRouter = async ()=>{
  let users = new Set();
    let usersData = {
    tokeVerify: "",
    permisions: [],
  };
  const token = sessionStorage.getItem("secure_token");
  let type = sessionStorage.getItem("type");

  if(type === "user"){
    
    const response = await serviceUsers.getModulesUser({ x: "y" }, null );
    let dataPermissions = response.data.data
    dataPermissions.length > 0 ? dataPermissions.map((item)=>{
      let pathRouter = item.pathrouter.replace(/.*\//, "");
      usersData.permisions.push(pathRouter)
    }) : null
  }
  if(type === "administrador"){
    dataIsAllowed.map((item)=>{
     usersData.permisions.push(item.nombre)
    })
  }
  usersData.tokeVerify = token ? token : null;
  console.log(usersData)
  usersData.permisions.length > 0 ? sessionStorage.setItem("users",JSON.stringify(usersData)) : null
  return users.add(usersData);
}
let users = JSON.parse(sessionStorage.getItem("users"));
export let permissionsPages = users !== null ? users : false;