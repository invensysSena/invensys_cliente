import { useState, createContext, useContext } from "react";
import {
  getUsersAdmin,
  DeleteuserPost,
  UploadcsvUsuario,
  PostDataUserRegister,
  getDataAdmin,
  setModule,
  GetModule,
  DeleteModule,
  getDataAll,
  uploadImg,
  UpdateAdminAll,
} from "../../apis/ApiData";
import { TodoFunctions } from "../../apis/ApiData";

let isAllowedToken = localStorage.getItem("secure_token");
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

  const getAdminDataAll = async () => {
    try {
      const response = await getDataAll();
      setAdminGetData(response.data.data);
    } catch (error) {
      return error;
    }
  };
  const typePermissionsModul = async (id,path,mthod) => {
    try {
      const response = await TodoFunctions.typePermissionsModules(id,path,mthod);
      return response;
    } catch (error) {
      return error;
    }
  }
  const getPermissionsModul = async () => {
    try {
      const response = await TodoFunctions.getPermissions();
      return response;
    } catch (error) {
      return error;
    }
  }

  const getUsersAdmins = async () => {
    try {
      // if (isAllowedToken === null) {
      //   return;
      // }
      const response = await getUsersAdmin();
        console.log(response)
      setGetUsers(response.data.data);
    } catch (error) {
      return error;
    }
  };

  const usersDeleteData = async (id) => {
    try {
      await DeleteuserPost(id);
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
      const response = await UploadcsvUsuario(formDataCsv, archivousuariocsv);

      setGetUsers([...getUsers, response.data.data]);
      return response;
    } catch (error) {
      return error;
    }
  };
  const UserRegister = async (postDataUserRegister) => {
    try {
      const response = await PostDataUserRegister(postDataUserRegister);

      setGetUsers([...getUsers, response.data.data[0][0]]);
      console.log(response)

      return response;
    } catch (error) {
      return error;
    }
  };

  const getAdminData = async () => {
    try {
      const response = await getDataAdmin(isAllowedToken);
      setGetUsers(response.data.data);
    } catch (error) {
      return error;
    }
  };
  const userModuleRegister = async (path,users,idmodule) => {
    try {
      const response = await setModule(path,users,idmodule);
      // setModuleUsers([...moduleUsers, response.data.data[0]]);

      return response;
    } catch (error) {
      return error;
    }
  };
  const getModule = async (id) => {
    try {
      const response = await GetModule(id);
      setModuleUsers(response.data.data);
      return JSON.parse(response);
    } catch (error) {
      return error;
    }
  };

  const DeleteModuleU = async (id) => {
    try {
      await DeleteModule(id);

      setModuleUsers(moduleUsers.filter((getuser) => getuser.IDmodulo !== id));
    } catch (error) {
      return error;
    }
  };
  const uploadImgAdminAll = async (imgData) => {
    try {
      const response = await uploadImg(imgData);

      return response;
    } catch (error) {
      return error;
    }
  };
  const updateDataAdmin = async (postDataUserRegister) => {
    try {
      const response = await UpdateAdminAll(postDataUserRegister);
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
