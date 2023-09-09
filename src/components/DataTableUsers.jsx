/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useCallback, useMemo } from "react";
import moment from "moment-with-locales-es6";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "react-loading-skeleton/dist/skeleton.css";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
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
import "react-lazy-load-image-component/src/effects/blur.css";
import { svgCsv, svgExcel, svgImportExcel, svgPrints, svgUsersTable } from "../svg/IconsSvg";
import { getFormatTimeLocale } from "../utils/UtilsMoments";
moment.locale("es");
export const DataTableUsers = () => {
  const { getUsersAdmins, getUsers, } = useGetUsers();
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

  const columnDefs = [
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
  ];
  let title = "Usuarios";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let params = {
    fileName: title,
    sheetName: title,
  };
  
  const handleShowModel = () => {
    StateModel(!stateModel);
  };
  const handleModelExcel = () => {
    setExcelModel(!ExcelModel);
  };
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv(params);
  }, [params]);

  const onBtExportExel = useCallback(() => {
    gridRef.current.api.exportDataAsExcel(params);
  }, [params]);
  const onBtPrint = useCallback(() => {
    const api = gridRef.current.api;
    setPrinterFriendly(api);
    setTimeout(function () {
      window.print();
      setNormal(api);
    }, 2000);
  }, []);

  return (
    <>
      <UploadExcel estado={ExcelModel} />
      <UserRegister estado={stateModel} />
      <main className="panel_opciones effect_blure dark:bg-[#37415197] dark:text-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
        <div className="plus_panel flex lg:flex-row flex-col lg:justify-between lg:items-center ">
          <section className="items-center flex">
            <div className="users flex items-center mx-2">
              <span>
              {svgUsersTable()}
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
                {svgCsv()}
              </span>
              <span>Descargar archivo scv</span>
            </button>
            <button
              onClick={onBtExportExel}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap "
            >
              <span>
                {svgExcel()}
              </span>
              <span>Exportar a excel</span>
            </button>
            <button
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap "
              onClick={handleModelExcel}
            >
              <span>
                {svgImportExcel()}
              </span>
              <span>Importar archivo excel </span>
            </button>
            <button onClick={onBtPrint} className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap">
             {svgPrints()}
              <span>Imprimir</span>
            </button>
            <button onClick={handleShowModel} className=" bg-[#019afa] text-white dark:border-[#019afa] flex items-center p-1 rounded-md border whitespace-nowrap" >
              Crear usuario
            </button>
          </section>
        </div>
        <div className="panel2">
          <div className="buttons"></div>
        </div>
      </main>
      <div className="buttons"></div>
      <section className="panel_second_h w-[100%] mx-auto flex-col lg:flex-row flex justify-between items-center">
        <article className="panel_analitic flex my-4">
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
              <span className="effect_blure  p-2 rounded-lg dark:bg-[#37415197]">
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
              </span>
            </div>
          </div>
        </article>

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
              // onInput={onFilterTextBoxChanged}
              className="outline-none dark:bg-transparent dark:text-white"
            />
          </div>
        </div>
      </section>
      <div
        className={" rounded-lg overflow-hidden ag-theme-alpine h-[260px] sm:w-[300px] w-[300px] md:w-[100%] md:h-[600px] shadow-2xl mx-auto"}
        id="myGrid"
      >
        <AgGridReact ref={gridRef} localeText={AG_GRID_LOCALE_EN} columnDefs={columnDefs}
          rowData={
            getUsers.map((item) => {
              return {
                correo: item.email,
                password: item.password,
                iduser: item.iduser,
                dateupdate: getFormatTimeLocale.getFormatTimellll(item.dateupdate),
                datecreate: getFormatTimeLocale.getFormatTimell(item.datecreate),
                estado: item.estado,}}) || []}
          defaultColDef={defaultColDef} animateRows={true}
          rowGroupPanelShow="always" pivotPanelShow="always"
          rowDragManaged={true} enableRangeSelection={true}
          sideBar={true} icons={true} pagination={true}
          paginationPageSize={10} paginateChildRows={true}
          suppressRowClickSelection={true} groupSelectsChildren={true} rowSelection={"multiple"}
          enableCharts={true} cacheQuickFilter={true} />
      </div>
    </>
  );
};
