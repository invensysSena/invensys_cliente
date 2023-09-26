import { createContext, useState, useContext } from "react";
import { serviceUsers } from "../../services/usersService";

export const contextUserAdmin = createContext();

export const usePostAuth = () => {
  const contextUser = useContext(contextUserAdmin);
  return contextUser;
};
export const UserContextData = ({ children }) => {
  const [getUserPost, setGetUserPostAut] = useState([]);

  const recoveryPasssword = async (email) => {
    try {
      const response = await serviceUsers.postRecoveryEmail({path: "recovery",method: "post",date: new Date()},email);
      return response;
    } catch (error) {
      return error;
    }
  };
  const newPasswordL = async (data) => {
    try {
      const response = await serviceUsers.newPassword({path: "newPass",method: "put",date: new Date()},data);
      return response;
    } catch (error) {
      return error;
    }
  };
  const verifyCodeUser = async (data) => {
    try {
      const response = await serviceUsers.recoverycode({path: "newPass",method: "put",date: new Date()},data);
      return response;
    } catch (error) {
      return error;
    }
  };
  const getPostLoginAuthGoogle = async (postDataUser) => {
    try {
      const response = await serviceUsers.AuthGoogle({path: "registerUser",method: "post",date: new Date()},postDataUser);
      return response;
    } catch (error) {
      return error;
    }
  };
  const getPostLogin = async (postDataUser) => {
    try {
      const response = await serviceUsers.PostDataUser({path: "registerUser",method: "post",date: new Date()},postDataUser);
      return response;
    } catch (error) {
      return error;
    }
  };
  const getPostRegister = async (postDataAdmin) => {
    try {
      const response = await serviceUsers.PostDataAdmin({
        path: "register",
        method: "post",
        date: new Date()},
        postDataAdmin);
      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <contextUserAdmin.Provider
      value={{
        getUserPost,
        getPostRegister,
        setGetUserPostAut,
        getPostLogin,
        recoveryPasssword,
        verifyCodeUser,
        newPasswordL,
        getPostLoginAuthGoogle,
      }}
    >
      {children}
    </contextUserAdmin.Provider>
  );
};
