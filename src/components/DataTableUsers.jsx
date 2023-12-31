import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import moment from "moment-with-locales-es6";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "react-loading-skeleton/dist/skeleton.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import plus from "../assets/icons/plus.svg";
import { AG_GRID_LOCALE_EN } from "../locale/locale";
import OpcionTabledCrud from "./OpcionTabledCrud";
import UserRegister from "./UserRegister";
import { checkboxSelection } from "./ChackSelection";
import { headerCheckboxSelection } from "./ChackSelection";
import { setPrinterFriendly } from "./ChackSelection";
import { ChackSelection } from "./ChackSelection";
import { setNormal } from "./ChackSelection";
import UploadExcel from "./UploadExcel";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
moment.locale("es");

export const DataTableUsers = () => {
  const {
    getUsersAdmins,
    getUsers,
   
  } = useGetUsers();

  useMemo(() => {
    const initial = async () => {
      await getUsersAdmins();
  
    };

    initial();
  }, []);

  const defaultColDef = ChackSelection();
  const gridRef = useRef();

  const [stateModel, StateModel] = useState(false);
  const [ExcelModel, setExcelModel] = useState(false);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Correo",
      field: "correo",

      rowDrag: true,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,

      filter: "agTextColumnFilter",
      chartDataType: "email",
    },
    {
      headerName: "Contraseña",
      field: "password",
      chartDataType: "email",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Identificador",
      field: "iduser",
      filter: "agTextColumnFilter",
      chartDataType: "id",
    },
    {
      headerName: "ultima hora de inicio de sesión",
      field: "dateupdate",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Fecha de creación",
      field: "datecreate",
      chartDataType: "postId",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Estado",
      field: "estado",
      cellStyle: (params) =>
        params.value === "activo" ? { color: "#19c37d" } : { color: "red" },
      chartDataType: "postId",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Opciones",
      field: "Settings",
      cellRenderer: OpcionTabledCrud,
    },
  ]);

  const handleShowModel = () => {
    StateModel(!stateModel);
  };
  const handleModelExcel = () => {
    setExcelModel(!ExcelModel);
  };
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  const onBtExportExel = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
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

  // detectar el modo oscuro del sistema
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
 
  return (
    <>
      <UploadExcel estado={ExcelModel} />
      <UserRegister estado={stateModel} />
      <div className="panel_opciones effect_blure dark:bg-[#37415197] dark:text-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
        <div className="plus_panel flex lg:flex-row flex-col lg:justify-between lg:items-center ">
          <section className="items-center flex">
            <div className="users flex items-center mx-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3498DB"
                    d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"
                  />
                </svg>
              </span>
              <span className="colorTextGlobal mx-1"> Usuarios</span>
              <span className="text-[#3498DB] mx-1">{getUsers.length}</span>
            </div>
          </section>

          <section className="flex overflow-x-auto flex-col gap-2 md:flex-row ">
            <button
              onClick={onBtnExport}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap "
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="green"
                    d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 8v11h14V8H5Zm7 10l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Zm-7 1h14H5Z"
                  />
                </svg>
              </span>
              <span>Descargar archivo scv</span>
            </button>
            <button
              onClick={onBtExportExel}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap "
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#158c51"
                    d="m2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286L7.4 8H5l2.8 4L5 16h2.4L9 13.714L10.6 16H13l-2.8-4z"
                  />
                </svg>
              </span>
              <span>Exportar a excel</span>
            </button>
            <button
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap "
              onClick={handleModelExcel}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#0c6e36"
                    d="M4 3h14a2 2 0 0 1 2 2v7.08a6.01 6.01 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7H4m8 0v4h6V7h-6m-8 6v4h6v-4H4m14.44 2v2h4v2h-4v2l-3-3l3-3"
                  />
                </svg>
              </span>
              <span>Importar archivo excel </span>
            </button>
            <button
              onClick={onBtPrint}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 7H6V3h12v4Zm0 5.5q.425 0 .713-.288T19 11.5q0-.425-.288-.713T18 10.5q-.425 0-.713.288T17 11.5q0 .425.288.713T18 12.5ZM16 19v-4H8v4h8Zm2 2H6v-4H2v-6q0-1.275.875-2.138T5 8h14q1.275 0 2.138.863T22 11v6h-4v4Z"
                />
              </svg>
              <span>Imprimir</span>
            </button>
            <button></button>
            <button
              onClick={handleShowModel}
              className=" bg-[#019afa] text-white dark:border-[#019afa] flex items-center p-1 rounded-md border whitespace-nowrap"
            >
              <LazyLoadImage src={plus} alt="" effect="blur" />
              Crear usuario
            </button>
          </section>
        </div>
        <div className="panel2">
          <div className="buttons"></div>
        </div>
      </div>
      <div className="buttons"></div>
      <div className="panel_second_h w-[100%] mx-auto flex-col lg:flex-row flex justify-between items-center">
        <div className="panel_analitic flex my-4">
          <div className="content flex ">
            <div className="inactive flex items-center ">
              <div className=" effect_blure p-2 rounded-lg mx-1 dark:bg-[#37415197]">
                <span className="text-green-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m21.1 12.5l1.4 1.41l-6.53 6.59L12.5 17l1.4-1.41l2.07 2.08l5.13-5.17M10 17l3 3H3v-2c0-2.21 3.58-4 8-4l1.89.11L10 17m1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4Z"
                    />
                  </svg>

                  <span>Activos {
                    getUsers.length > 0 ? getUsers.filter((item) => item.estado === "activo").length : 0
                    
                    } </span>
                </span>
              </div>
              <div className="effect_blure  p-2 rounded-lg dark:bg-[#37415197]">
                <span className="text-[red] flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="red"
                      d="M10 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H2v-2c0-2.21 3.58-4 8-4m10-2V7h2v6h-2m0 4v-2h2v2h-2Z"
                    />
                  </svg>
                  <div className="span mx-1">Inactivos {
                    getUsers.length > 0 ? getUsers.filter((item) => item.estado === "inactivo").length : 0
                  }</div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="search bg-white dark:bg-[#37415197]  flex mb-2 items-center p-2 rounded-full">
          <div className="icon_search mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 16 16"
            >
              <g transform="translate(16 0) scale(-1 1)">
                <path
                  fill="#ABB2B9"
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
                />
              </g>
            </svg>
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
        className={
          darkMode
            ? "ag-theme-alpine-dark h-[300px] w-[260px] sm:w-[300px] md:w-[100%] md:h-[600px] shadow-2xl mx-auto rounded-lg overflow-hidden "
            : " rounded-lg overflow-hidden ag-theme-alpine h-[260px] sm:w-[300px] w-[300px] md:w-[100%] md:h-[600px] shadow-2xl mx-auto"
        }
        id="myGrid"
      >
        <AgGridReact
          ref={gridRef}
          localeText={AG_GRID_LOCALE_EN}
          columnDefs={columnDefs}
          rowData={
            getUsers.map((item) => {
              
              return {
                correo: item.email,
                password: item.password,
                iduser: item.iduser,
                dateupdate: moment(item.dateupdate).format("LLLL"),
                datecreate: moment(item.datecreate).format("LLLL"),
                estado: item.estado,
                
               
              };
            }) || []
          }
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
