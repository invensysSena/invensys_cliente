import { useContext, createContext, useState } from "react";
import { serviceInventory } from "../../services/serviceInventory";
const InventarioContext = createContext();

export const useInventario = () => useContext(InventarioContext);

export const ContextInventario = ({ children }) => {
  const [inventario, setInventario] = useState([]);

  const GetInventario = async () => {
    const data = await serviceInventory.getInventario({method:"get"});
    setInventario(data.data.response);
    return data;
  };

  const PostInventario = async (data) => {
    const inventarios = await serviceInventory.postInventario({method:"POST"},data);
    setInventario([...inventario, inventarios.data.response]);
    return inventarios;
  };
  const DeleteInventario = async (id) => {
    try {
      const response = await serviceInventory.deleteInventario({method:"POST"},{id:id});
    setInventario(inventario.filter((item) => item._id !== id));
    return response;
    } catch (error) {
      console.log(error)
      return error;
    }
  };
  const UpdateInventario = async (id, data) => {
    const response = await serviceInventory.updateInventario({method:"POST"},{id:id}, data);

    setInventario(
      inventario.map((items) =>
        items._id === id ? response.data.response : items
      )
    );
    return response;
  };

  return (
    <InventarioContext.Provider
      value={{
        inventario,
        setInventario,
        GetInventario,
        PostInventario,
        DeleteInventario,
        UpdateInventario,
      }}
    >
      {children}
    </InventarioContext.Provider>
  );
};
