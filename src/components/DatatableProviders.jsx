import { useRef, useState, useCallback, useEffect } from "react";
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
import { useContextProviders } from "../hooks/context/ContextProveedores";
import OptionsProviders from "./OptionsProviders";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CreateProveedor } from "./providers/CreateProveedor";
import { svgCsv, svgExcel, svgPrints, svgSearch } from "../svg/IconsSvg";
moment.locale("es");
export const DatatableProviders = () => {
  const [estadoProvider, setEstadoProvider] = useState(false);
  const { providersData, getProviders } = useContextProviders();
  useEffect(() => {
    getProviders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [active, setActive] = useState(false);

  const defaultColDef = ChackSelection();
  const gridRef = useRef();

  const columnDefs =[
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
      headerName: "Dirección",
      field: "address",
      filter: "agTextColumnFilter",
      chartDataType: "series",
    },
    {
      headerName: "Compañia",
      field: "company",
      chartDataType: "series",
      filter: "agTextColumnFilter",
      sort: "desc",
    },
    {
      headerName: "Correo",
      field: "email",
      chartDataType: "series",
      filter: "agTextColumnFilter",
      sort: "desc",
    },

    {
      headerName: "Telefono",
      field: "phone",
      chartDataType: "category",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "fecha",
      field: "fecha",
      chartDataType: "series",
    },
    {
      headerName: "Opciones",
      field: "Settings",
      cellRenderer: OptionsProviders,
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
      { <CreateProveedor estado={estadoProvider} cambiarEstado={setEstadoProvider} /> }
      <div className=" panel_opciones effect_bluresT dark:bg-[#37415197] dark:text-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
        <div className="plus_panel flex lg:flex-row flex-col lg:justify-between lg:items-center">
          <section className="items-center flex">
            <div className="users flex items-center mx-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="#3498DB"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <rect width="30" height="36" x="9" y="8" rx="2" />
                    <path
                      strokeLinecap="round"
                      d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"
                    />
                  </g>
                </svg>
              </span>
              <span className="text-[#3498DB] mx-1">Pedidos</span>
              <span className="text-[#3498DB] mx-1">
                {providersData.length}
              </span>
            </div>
          </section>

          <section className="flex overflow-x-auto flex-col gap-2 md:flex-row  ">
            <button
              onClick={onBtnExport}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
            >
              <span>
                {svgCsv()}
              </span>
              <span className="whitespace-nowrap">Descargar archivo scv</span>
            </button>
            <button
              onClick={onBtExportExel}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
            >
              <span>
                {svgExcel()}
              </span>
              <span className="whitespace-nowrap">Exportar a excel</span>
            </button>

            <button
              onClick={onBtPrint}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
            >
              {svgPrints()}
              <span className="whitespace-nowrap">Imprimir</span>
            </button>
            <button
              onClick={() =>  setEstadoProvider(!estadoProvider)}
              className=" bg-[#019afa] dark:border-[#019afa] text-white flex items-center p-1 rounded-md border"
            >
             
              <div className="whitespace-nowrap">Crear proveedor</div>
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
          
        </div>

        <div className="search bg-white dark:bg-[#37415197] mb-2 flex items-center p-2 rounded-full">
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
        className={" rounded-lg overflow-hidden ag-theme-alpine h-[300px] w-[300px] md:w-[100%] md:h-[600px] shadow-2xl mx-auto"}
        id="myGrid"
      >
        <AgGridReact
          ref={gridRef}
          localeText={AG_GRID_LOCALE_EN}
          columnDefs={columnDefs}
          rowData={providersData.map((item) => {
            return {
              _id: item._id,
              name: item.name,
              email: item.email,
              phone: item.phone,
              address: item.address,
              company: item.company,
              fecha: moment(item.fecha).format("Do MMMM YYYY"),
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
