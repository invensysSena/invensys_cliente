import { useRef, useState, useCallback,  useMemo } from "react";
import moment from "moment-with-locales-es6";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "react-loading-skeleton/dist/skeleton.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import { AG_GRID_LOCALE_EN } from "../locale/locale";
import { RegisterCategorys } from "./RegisterCategorys";
import { checkboxSelection } from "./ChackSelection";
import { headerCheckboxSelection } from "./ChackSelection";
import { setPrinterFriendly } from "./ChackSelection";
import { ChackSelection } from "./ChackSelection";
import { setNormal } from "./ChackSelection";
import { getBusiness } from "../apis/ApiData";
import { ContextCategory } from "../hooks/context/ContextCategory";
import { useContextCategory } from "../hooks/context/ContextCategory";
import { svgCsv, svgExcel, svgSearch } from "../svg/IconsSvg";
import { IconsSvgLoading } from "../svg/IconsSvgLoading";

moment.locale("es");
export const DatatableInventory = () => {
  const [subViewProducts, setSubViewProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const { getDataCategorias } = useContextCategory();

  useMemo(() => {
    const initial = async () => {
      await getDataCategorias();
    };

    initial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMemo(() => {
    (async () => {
      setLoad(true);

      const res = await getBusiness();
      setSubViewProducts(res.data.dataSubProduct);
      setLoad(false);
    })();
  }, []);

  // count categorias

  const defaultColDef = ChackSelection();
  const gridRef = useRef();

  const [stateModel, StateModel] = useState(false);

  const columnDefs = [
    {
      headerName: "Identificador",
      field: "_id",
      rowDrag: true,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,

      filter: "agTextColumnFilter",
      chartDataType: "correo",
    },
    {
      headerName: "id Bodega",
      field: "idBodega",
      chartDataType: "correo",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Nombre",
      field: "name",
      chartDataType: "email",
      filter: "agTextColumnFilter",

      cellEditorParams: () => {
        return {};
      },
    },
    {
      headerName: "Mejores ventas",
      field: "change",
      cellRenderer: "agSparklineCellRenderer",
      cellRendererParams: {
        sparklineOptions: {
          type: "bar",
          fill: "#019afa",
          stroke: "#91cc75",
          highlightStyle: {
            fill: "#5994f5",
          },
          valueAxisDomain: [0, 1],
          paddingOuter: 0,
          padding: {
            top: 0,
            bottom: 0,
          },
          axis: {
            strokeWidth: 0,
          },
        },
      },
    },
    {
      headerName: "Precio compra",
      field: "priceCompra",
      filter: "agTextColumnFilter",
      chartDataType: "id",
    },
    {
      headerName: "No.",
      field: "no",
      filter: "agTextColumnFilter",
      chartDataType: "id",
      cellStyle: (params) =>
        params.value !== undefined ? { color: "#067fc0" } : { color: "red" },
    },
    {
      headerName: "Precio venta",
      field: "priceVenta",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "stock máximo",
      field: "stockMaximo",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "stock Minimo",
      field: "stockMinimo",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Unidades",
      field: "unidad",
      cellStyle: (params) =>
        params.value > 0 ? { color: "#1daf53" } : { color: "red" },
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Ganancias",
      field: "ganancias",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Total",
      field: "total",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Caducidad",
      field: "caducidad",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "vencimiento",
      field: "vencimiento",
      chartDataType: "body",
      filter: "agTextColumnFilter",
      cellStyle: (params) =>
        params.value !== "Vencido" ? { color: "#1daf53" } : { color: "red" },
    },
    {
      headerName: "Estado",
      field: "Estado",
      cellStyle: (params) =>
        params.value === "Activo" ? { color: "#1daf53" } : { color: "red" },
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },

    {
      headerName: "Fecha de cración",
      field: "dateCreate",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
  ]
  
  let title = "Reportes de inventario";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let params = {
    fileName: title,
    sheetName: title,
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

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  const loadingCellRenderer = useMemo(() => {
    return "eSPERE UN MOMENTO";
  }, []);
  const loadingCellRendererParams = useMemo(() => {
    return {
      loadingMessage: "One moment please...",
    };
  }, []);

  const totalUnidades = subViewProducts.reduce((a, b) => a + b.unidad, 0);
  const moneyDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
 
  return (
    <>
      {load ? (
        <>
          <div className="container h-screen animate__animated animate__fadeInDown rounded-md grid place-content-center mt-[-4rem] ">
            {<IconsSvgLoading W={80} h={80} />}
          </div>
        </>
      ) : (
        <div className="help">
          <ContextCategory>
            <RegisterCategorys estado={stateModel} />
          </ContextCategory>
          <div className="panel_opciones  dark:bg-[#37415197] dark:text-white bg-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
            <div className="plus_panel flex lg:flex-row flex-col lg:justify-between lg:items-center">
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
                        d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4z"
                      />
                    </svg>
                  </span>
                  <span className="text-[#3498DB] mx-1">
                    Total de productos
                  </span>
                  <span className="text-[#3498DB] mx-1">
                    {subViewProducts.length}
                  </span>
                </div>
              </section>

              <section className="flex overflow-x-auto flex-col gap-2 md:flex-row   ">
                <button
                  onClick={onBtnExport}
                  className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
                >
                  <span>
                   {svgCsv()}
                  </span>
                  <span className="whitespace-nowrap">
                    Descargar archivo scv
                  </span>
                </button>
                <button
                  onClick={onBtExportExel}
                  className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap"
                >
                  <span>
                   {svgExcel()}
                  </span>
                  <span className="whitespace-nowrap">Exportar a excel</span>
                </button>

                <button
                  onClick={onBtPrint}
                  className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap"
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
                  <span className="whitespace-nowrap">Imprimir</span>
                </button>
              </section>
            </div>
            <div className="panel2">
              <div className="buttons"></div>
            </div>
          </div>
          <div className="buttons"></div>
          <div className="panel_second_h w-[100%] mx-auto flex-col lg:flex-row flex justify-between items-center">
            <div className="panel_analitic my-1 flex">
              <div className="flex items-center border dark:border-[#019afa] mx-1 p-1 rounded-md">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#78909C"
                      d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4z"
                    />
                    <path fill="#AED581" d="M14 1h20v31H14z" />
                    <g fill="#558B2F">
                      <path d="M13 0v33h22V0H13zm20 31H15V2h18v29z" />
                      <path d="M34 3c0 1.7-.3 3-2 3s-3-1.3-3-3s1.3-2 3-2s2 .3 2 2zM16 1c1.7 0 3 .3 3 2s-1.3 3-3 3s-2-1.3-2-3s.3-2 2-2z" />
                      <circle cx="24" cy="8" r="2" />
                      <circle cx="24" cy="20" r="6" />
                    </g>
                    <path
                      fill="#CFD8DC"
                      d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13l20-13v20c0 2.2-1.8 4-4 4z"
                    />
                  </svg>
                </span>
                <span className="dark:text-white">
                  Total de unidades :{" "}
                  {("+ " + totalUnidades).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  )}{" "}
                </span>
              </div>
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
                  className="outline-none  dark:bg-transparent dark:text-white "
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
              rowData={subViewProducts.map((item, i) => {
                let ganancias = item.priceVenta - item.priceCompra;
                let total = item.priceVenta * item.unidad;
                console.log("----", total);
                const fechaActual = new Date();
                const diaActual = fechaActual.getDate();
                const mesActual = fechaActual.getMonth();
                const anioActual = fechaActual.getFullYear();

                const fechaVencimiento = item.caducidad;
                const milisegundosPorDia = 1000 * 60 * 60 * 24; // milisegundos en un día

                const diferencia = Math.ceil(
                  (Date.parse(fechaVencimiento) -
                    Date.parse(`${anioActual}-${mesActual + 1}-${diaActual}`)) /
                    milisegundosPorDia
                );
                return {
                  _id: item._id,
                  idBodega: item.idInventory,
                  name: item.name,
                  no: "No. " + i + 1,
                  change: [total],
                  priceCompra: moneyDolar.format(item.priceCompra),
                  priceVenta: moneyDolar.format(item.priceVenta),
                  stockMaximo: (" " + item.stockMaximo).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  ),
                  stockMinimo: (" " + item.stockMinimo).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  ),
                  unidad: (" " + item.unidad).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  ),
                  ganancias: moneyDolar.format(ganancias),
                  total: moneyDolar.format(total),
                  vencimiento:
                    diferencia === 0 || diferencia < 0 ? "Vencido" : "Estable",
                  caducidad: moment().add(diferencia, "days").calendar(),
                  dateCreate: moment(item.createdAt).format("LLLL"),
                  Estado: "Activo",
                };
              })}
              defaultColDef={defaultColDef}
              animateRows={true}
              loadingCellRenderer={loadingCellRenderer}
              loadingCellRendererParams={loadingCellRendererParams}
              rowDragManaged={true}
              enableRangeSelection={true}
              icons={true}
              pagination={true}
              paginationPageSize={15}
              paginateChildRows={true}
              suppressRowClickSelection={true}
              groupSelectsChildren={true}
              rowSelection={"multiple"}
              enableCharts={true}
              cacheQuickFilter={true}
            ></AgGridReact>
          </div>
        </div>
      )}
    </>
  );
};
