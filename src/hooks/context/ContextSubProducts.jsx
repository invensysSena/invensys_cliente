import { useState, useContext, createContext } from "react";
import { DataSubProducts } from "../../components/Tables/DataSubProducts";
import { servicesProduct } from "../../services/servicesProduct";

const createContextSubProducts = createContext();

export const useContextSubProducts = () => useContext(createContextSubProducts);

export const ContextSubProducts = ({ children }) => {
  const [subProductsData, setSubProductsData] = useState([]);

  const getSubProductsContent = async (id) => {
    const data = await servicesProduct.getSubProducts({x:"f"},{id:id});
    setSubProductsData(data.data.response);
    return data;
  };
  const getSubProductsContentId = async (id) => {
    const data = await servicesProduct.getSubProductsIdAll({x:"f"},{id:id});
    setSubProductsData(data.data.response);
    return data;
  };

  const updateSubProductsContent = async (id, data) => {
    const response = await servicesProduct.translateProducts({f:"ff"},data);

    setSubProductsData(
      subProductsData.map((item) =>
        item._id === id ? response.data.responseClass : item
      )
    );
    <DataSubProducts dataInventorySubProducts={subProductsData} />;
    return response;
  };
  return (
    <>
      <createContextSubProducts.Provider
        value={{
          getSubProductsContent,
          getSubProductsContentId,
          subProductsData,
          setSubProductsData,
          updateSubProductsContent,
        }}
      >
        {children}
      </createContextSubProducts.Provider>
    </>
  );
};
