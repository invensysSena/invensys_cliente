import { useContext, createContext, useState } from "react";
import { servicesProveedor } from "../../services/servicesProveedor";
const ContextProviders = createContext();

export const useContextProviders = () => useContext(ContextProviders);

export const ContextProveedores = ({ children }) => {
  const [providersData, setProvidersData] = useState([]);

  const getProviders = async () => {
    const res = await servicesProveedor.getProveedores({x:"Y"});

    setProvidersData(res.data);
    return res;
  };

  const postProviders = async (data) => {
    const providers = await servicesProveedor.postProveedores({u:"h"},data);

    let getData = {
      _id: providers.data.providers._id,
      name: providers.data.providers.name,
      email: providers.data.providers.email,
      phone: providers.data.providers.phone,
      address: providers.data.providers.address,
      company: providers.data.providers.company,
      fecha: providers.data.providers.createdAt,
    };
    setProvidersData([...providersData, getData]);

    return providers;
  };

  const deleteProviders = async (id) => {
    const res = await servicesProveedor.deleteProveedores({x:"y"},{id:id});
    setProvidersData(providersData.filter((item) => item._id !== id));
    return res;
  };
  const updateProviders = async (id, data) => {
    const res = await servicesProveedor.updateProveedores( {x:"y"},data,{id:id});
    return res;
  };

  return (
    <ContextProviders.Provider
      value={{
        providersData,
        setProvidersData,
        getProviders,
        postProviders,
        deleteProviders,
        updateProviders,
      }}
    >
      {children}
    </ContextProviders.Provider>
  );
};
