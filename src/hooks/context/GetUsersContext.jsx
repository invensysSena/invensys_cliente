import { useState, createContext, useContext } from "react";
import { serviceUsers } from "../../services/usersService";
let isAllowedToken = sessionStorage.getItem("secure_token");
export const GetUsersDataAdmin = createContext();
export const useGetUsers = () => {
  const contextUser = useContext(GetUsersDataAdmin);
  return contextUser;
};


export const GetUsersContext = ({ children }) => {
  const [getUsers, setGetUsers] = useState([]);
  const [getActivosUsers, setGetActivosUsers] = useState([]);
  const [getInactivosUsers, setGetInactivosUsers] = useState([]);
  const [getCountDateUsers, setGetCountDateUsers] = useState([]);
  const [getModuleU, setGetModuleU] = useState([]);
  const [moduleUsers, setModuleUsers] = useState([]);
  const [adminGetData, setAdminGetData] = useState([]);

  const getAdminDataAll = async (action) => {
    try {
      const response = await serviceUsers.getDataAll(action);
      setAdminGetData(response.data.data);
    } catch (error) {
      return error;
    }
  };
  const typePermissionsModul = async (id,path,method) => {
    try {
      const response = await serviceUsers.typePermissionsModules({n:1},{id,path,method});
      return response;
    } catch (error) {
      return error;
    }
  }
  const getPermissionsModul = async () => {
    try {
      const response = await serviceUsers.getPermissions({n:1});
      return response;
    } catch (error) {
      return error;
    }
  }

  const getUsersAdmins = async () => {
    try {
   
      const response = await serviceUsers.getUsersAdmin();
        console.log(response)
      setGetUsers(response.data.data);
    } catch (error) {
      return error;
    }
  };

  const usersDeleteData = async (id) => {
    try {
      await serviceUsers.DeleteuserPost({path: "deleteUser",method: "post", date: new Date()},id);
      setGetCountDateUsers(getCountDateUsers - 1);
      return setGetUsers(
        getUsers.filter((getuser) => getuser.idAccount !== id)
      );
    } catch (error) {
      return error;
    }
  };
  const postUploadcsvUsuario = async (formDataCsv, archivousuariocsv) => {
    try {
      const response = await serviceUsers.UploadcsvUsuario({path: "uploadcsvUsers",method: "post", date: new Date()},{formDataCsv, archivousuariocsv});

      setGetUsers([...getUsers, response.data.data]);
      return response;
    } catch (error) {
      return error;
    }
  };
  const UserRegister = async (postDataUserRegister) => {
    try {
      const response = await serviceUsers.PostDataUserRegister({
      path: "registerUser",
      method: "post",
      date: new Date()},
      postDataUserRegister);

      setGetUsers([...getUsers, response.data.data[0][0]]);
      console.log(response)

      return response;
    } catch (error) {
      return error;
    }
  };

  const getAdminData = async () => {
    try {
      const response = await serviceUsers.getDataAdmin({path: "getsataAdminr",method: "post", date: new Date()},isAllowedToken);
      setGetUsers(response.data.data);
    } catch (error) {
      return error;
    }
  };
  const userModuleRegister = async (path,iduser,idmodule) => {
    try {
      const response = await serviceUsers.setModule({path: "setModule",method: "post", date: new Date()},{path,iduser,idmodule});

      return response;
    } catch (error) {
      return error;
    }
  };
  const getModule = async (id) => {
    try {
      const response = await serviceUsers.GetModule({path: "getModuleUsers",method: "get", date: new Date()},id);
      setModuleUsers(response.data.data);
      return JSON.parse(response);
    } catch (error) {
      return error;
    }
  };

  const DeleteModuleU = async (id) => {
    try {
      await serviceUsers.DeleteModule({path: "deleteModuleUser",method: "post", date: new Date()},id);

      setModuleUsers(moduleUsers.filter((getuser) => getuser.IDmodulo !== id));
    } catch (error) {
      return error;
    }
  };
  const uploadImgAdminAll = async (imgData) => {
    try {
      const response = await serviceUsers.uploadImg({path: "AuploadImageA",method: "post", date: new Date()},imgData);

      return response;
    } catch (error) {
      return error;
    }
  };
  const updateDataAdmin = async (postDataUserRegister) => {
    try {
      const response = await serviceUsers.UpdateAdminAll({path: "updateAdminALL",method: "post", date: new Date()},postDataUserRegister);
      const data = response.data.data[0];
      let email = data.correo;

      setAdminGetData(
        postDataUserRegister.map((post) =>
          post.email === email ? response.data.data[0] : post
        )
      );

      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <GetUsersDataAdmin.Provider
      value={{
        getUsers,
        setGetUsers,
        getUsersAdmins,
        usersDeleteData,
        postUploadcsvUsuario,
        UserRegister,
        getCountDateUsers,
        getActivosUsers,
        getInactivosUsers,
        setGetInactivosUsers,
        setGetActivosUsers,
        getAdminData,
        userModuleRegister,
        moduleUsers,
        getModule,
        getModuleU,
        typePermissionsModul,
        setGetModuleU,
        DeleteModuleU,
        getAdminDataAll,
        adminGetData,
        uploadImgAdminAll,
        updateDataAdmin,
        getPermissionsModul,
       
      }}
    >
      {children}
    </GetUsersDataAdmin.Provider>
  );
};
