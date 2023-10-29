import {serviceUsers  } from "../services/usersService";

export const authCuantaLogin = async (email, password) => {
    try {
      const response = await serviceUsers.postLogin({ x: "y" }, { email, password });
      
      const commonProps = {
        secure_token: response.data.token,
        auth_cuenta: response.data.auth,
        perfil_rol: response.data.type,
        type: response.data.type,
        email: response.data.email,
      };
  
      if (response.data.type === "admin") {
        sessionStorage.setItem("type", response.rol);
      } else {
          let modules = response.data.modules[0].pathrouter;
          let newPath = modules.replace(/.*\//, "/");
          commonProps.module = newPath;
      }
  
      Object.keys(commonProps).forEach((key) => {
        sessionStorage.setItem(key, commonProps[key]);
      });
      
      return response;
    
    } catch (error) {
      return error;
    }
  };