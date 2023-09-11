import { useRef, useState, useCallback, useEffect} from "react";
import moment from "moment-with-locales-es6";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "react-loading-skeleton/dist/skeleton.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import { AG_GRID_LOCALE_EN } from "../locale/locale";
import { checkboxSelection } from "./ChackSelection";
import { headerCheckboxSelection } from "./ChackSelection";
import { setPrinterFriendly } from "./ChackSelection";
import { ChackSelection } from "./ChackSelection";
import { setNormal } from "./ChackSelection";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import { useContextProduct } from "../hooks/context/ContextProduxt";
import { FormProduct } from "./FormProduct/FormProduct";
import OptionsProducto from "./FormProduct/OptionsProducto";
import "react-lazy-load-image-component/src/effects/blur.css";
import { svgCsv, svgExcel, svgPrints, svgSearch } from "../svg/IconsSvg";
moment.locale("es");

export const DatatableProduct = () => {

  const [estadoProduct, setEstadoProduct] = useState(false);
  const { getProductsAll, dataProduct } = useContextProduct();
  useEffect(() => {
    getProductsAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getUsersAdmins,  } = useGetUsers();

  const [active, setActive] = useState(false);
  useEffect(() => {
    const initial = async () => {
      await getUsersAdmins();
    };
    initial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultColDef = ChackSelection();
  const gridRef = useRef();

  const columnDefs= [
    {
      headerName: "Identificador",
      field: "_id",
      rowDrag: true,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Nombre",
      field: "name",
      chartDataType: "series",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Descripción",
      field: "description",
      filter: "agTextColumnFilter",
      chartDataType: "series",
    },

    {
      headerName: "Fecha de creación",
      field: "caducidad",
      chartDataType: "category",
      filter: "agTextColumnFilter",
    },

    {
      headerName: "Opciones",
      field: "Settings",
      cellRenderer: OptionsProducto,
    },
  ];
  let title = "Productos";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let params = {
    fileName: title,
    sheetName: title,
  };
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv(params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBtExportExel = useCallback(() => {
    gridRef.current.api.exportDataAsExcel(params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onBtPrint = useCallback(() => {
    const api = gridRef.current.api;
    setPrinterFriendly(api);
    setTimeout(function () {
      window.print();
      setNormal(api);
    }, 2000);
  }, []);
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  return (
    <>
      { <FormProduct estado={estadoProduct} cambiarEstadoProduct={setEstadoProduct}  /> }
      <div className="panel_opciones effect_bluresT dark:bg-[#37415197] dark:text-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
        <div className="plus_panel flex lg:flex-row flex-col lg:justify-between lg:items-center">
          <section className="items-center flex">
            <div className="users flex items-center mx-2">
              
              <span className="text-[#3498DB] mx-1">Productos</span>
              <span className="text-[#3498DB] mx-1">{dataProduct.length}</span>
            </div>
          </section>

          <section className="flex overflow-x-auto flex-col gap-2 md:flex-row ">
            <button
              onClick={onBtnExport}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap"
            >
              <span>
               {svgCsv()}
              </span>
              <span>Descargar archivo scv</span>
            </button>
            <button
              onClick={onBtExportExel}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap"
            >
              <span>
                {svgExcel()}
              </span>
              <span>Exportar a excel</span>
            </button>

            <button onClick={onBtPrint} className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap"
            >
            {svgPrints()}
              <span>Imprimir</span>
            </button>
            <button
              onClick={() => setEstadoProduct(!estadoProduct)}
              className=" bg-[#019afa] dark:border-[#019afa] text-white flex items-center p-1 rounded-md border whitespace-nowrap"
            >
   
              Crear producto
            </button>
          </section>
        </div>
        <div className="panel2">
          <div className="buttons"></div>
        </div>
      </div>
      <div className="buttons"></div>
      <div className="panel_second_h w-[100%] mx-auto flex-col lg:flex-row flex justify-between items-center">
        <div className="panel_analitic block  my-2">
          <div className="content flex ">
            
          </div>
        </div>

        <div className="search bg-white dark:bg-[#37415197] mb-3 flex items-center p-2 rounded-full">
          <div className="icon_search mx-1">
          {svgSearch()}
          </div>
          <div className="input_panel">
            <input
              type="text"
              id="filter-text-box"
              placeholder="Buscar..."
              onInput={onFilterTextBoxChanged}
              className="outline-none dark:bg-transparent dark:text-white"
            />
          </div>
        </div>
      </div>
      <div
        className={" rounded-lg overflow-hidden ag-theme-alpine h-[300px] w-[300px] md:w-[100%] md:h-[600px] shadow-2xl md:mx-auto"}
        id="myGrid" >
        <AgGridReact
          ref={gridRef}
          localeText={AG_GRID_LOCALE_EN}
          columnDefs={columnDefs}
          rowData={dataProduct.map((item) => {
            return {
              _id: item._id,
              name: item.name,
              description: item.description,
              // ponser signo de pesos
              caducidad: moment(item.createdAt).format("LLLL"),
            };
          })}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowGroupPanelShow="always"
          pivotPanelShow="always"
          rowDragManaged={true}
          enableRangeSelection={true}
          sideBar={true}
          icons={true}
          pagination={true}
          paginationPageSize={10}
          paginateChildRows={true}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          rowSelection={"multiple"}
          enableCharts={true}
          cacheQuickFilter={true}
        ></AgGridReact>
      </div>
    </>
  );
};
