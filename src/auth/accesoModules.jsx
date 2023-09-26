import { useGetUsers } from "../hooks/context/GetUsersContext";

export const PostModulePermissions = async (path,iduser) => {
        const {userModuleRegister,} = useGetUsers();
          try {
            return await  userModuleRegister(path,iduser);

          } catch (error) {

            return error;
            
          }
    }