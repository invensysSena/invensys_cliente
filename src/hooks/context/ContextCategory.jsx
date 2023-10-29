import { createContext, useContext, useState } from "react";
import { servicesCategory } from "../../services/serviceCategrory";
const createContextCategory = createContext();
export const useContextCategory = () => {
  const context = useContext(createContextCategory);
  return context;
};

export const ContextCategory = ({ children }) => {
  const [dataGategorias, setDataGategorias] = useState([]);

  const getDataCategorias = async () => {
    try {
      const { data } = await servicesCategory.getCategorias({c:"d"});
      setDataGategorias(data.data);
    } catch (error) {
      return error;
    }
  };

  const postDataCategorias = async (postData) => {
    try {
      const { data } = await servicesCategory.postCategorias({x:"y"},postData);
      setDataGategorias([...dataGategorias, data.data]);
      return data;
    } catch (error) {
      return error;
    }
  };
  const deleteCategorys = async (id) => {
    try {
      const { data } = await servicesCategory.deleteCategory({x:"y"},{id:id});
      setDataGategorias(dataGategorias.filter((item) => item._id !== id));
      return data;
    } catch (error) {
      return error;
    }
  };
  const updateCategorys = async (id, updateData) => {
    try {
      const { data } = await servicesCategory.updateCategorias({x:"y"}, updateData,{id:id});

      setDataGategorias(
        dataGategorias.map((item) => (item._id === id ? data.data : item))
      );
      return data;
    } catch (error) {
      return error;
    }
  };

  return (
    <createContextCategory.Provider
      value={{
        dataGategorias,
        getDataCategorias,
        postDataCategorias,
        deleteCategorys,
        updateCategorys,
      }}
    >
      {children}
    </createContextCategory.Provider>
  );
};
