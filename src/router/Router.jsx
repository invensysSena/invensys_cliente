import { useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthUser } from "../components/AuthUser.jsx";
import { Signup } from "../components/Signup.jsx";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { Admin } from "../pages/Admin/Admin.jsx";
import { HomePage } from "../pages/HomePage";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import RecoveryPass from "../pages/RecoveryPass";
import CodePassword from "../pages/CodePassword";
import NewPassword from "../pages/newPassword";
import { Inventory } from "../layout/Inventory";
import { NotFount } from "../pages/NotFount";
import Header from "../components/Header";
import { Category } from "../layout/Category";
import { Usuarios } from "../layout/Usuarios";
import { Notification } from "../layout/Notification";
import { Product } from "../layout/Product";
import { Provider } from "../layout/Provider";
import { Analitycs } from "../layout/Analitycs";
import { Perfil } from "../layout/Perfil";
import { Shope } from "../layout/Shope";
import { Prueba } from "../layout/Prueba";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { Somos } from "../pages/Somos";
import { Contactanos } from "../pages/Contactanos";
import { ModalModule } from "../components/ModalModule";
import axios from "axios";

import { AyudaAdmin } from "../layout/AyudaAdmin";
import { EditarProduct } from "../components/FormProduct/EditarProduct";
import { Ventas } from "../layout/Ventas";
import { HomeDaboard } from "../components/screen/HomeDaboard";
import { ProductoDasboard } from "../components/screen/ProductoDasboard";
import { CategoryDasboard } from "../components/screen/CategoryDasboard";
import { ProvidersDasboard } from "../components/screen/ProvidersDasboard";
import { GetCategoryProvider } from "../components/screen/GetCategoryProvider";
import { UsersDasboard } from "../components/screen/UsersDasboard";
import { UserInfo } from "../components/screen/UserInfo";
import { UsersNotification } from "../components/NotificationsHeader/UsersNotification";
import { HomeNotification } from "../components/NotificationsHeader/HomeNotification";
import { ProductNotification } from "../components/NotificationsHeader/ProductNotification";
import { InventoryNotify } from "../components/NotificationsHeader/InventoryNotify";
import { CategoryNotify } from "../components/NotificationsHeader/CategoryNotify";
import { ProviderNotifyc } from "../components/NotificationsHeader/ProviderNotifyc";
import { PedidosNotify } from "../components/NotificationsHeader/PedidosNotify";
import { VentasNotify } from "../components/NotificationsHeader/VentasNotify";
import { ConfigInventory } from "../container/ConfigInventory";
import { TranslateProduct } from "../container/TranslateProduct";
import { FormSalida } from "../components/FormSalida";
import { DatatableVentas } from "../components/DatatableVentas";
import { ComprasPDF } from "../pdf/ComprasPDF";
import { Trae } from "../layout/Trae";
import { FormPedido } from "../components/FormPedido";
import { DataTablePedido } from "../components/DataTablePedido";
import { ConfigAdmin } from "../layout/ConfigAdmin";
import { ChartBodega } from "../Generator/ChartBodega";
import { ChartHome } from "../Generator/ChartHome";

import { ChartProductos } from "../Generator/ChartProductos";
import { ProductAgotados } from "../components/NotificationsHeader/ProductAgotados";
import { ComandsSistemA } from "../Generator/ComandsSistemA";
import { InventoryGeneral } from "../layout/InventoryGeneral";
import { urlServer } from "../urlApi/url";
import { dataIsAllowed } from "../secure/lowed.Modules";
import { Licence } from "../security/Licence";
export const Router = () => {
  const [usersP, setUsersP] = useState([]);
  const token = localStorage.getItem("secure_token");
  const token1 = localStorage.getItem("token_token1");
  let type = localStorage.getItem("type");
  let usersData = {
    tokeVerify: "",
    permisions: [],
  };

  if (type === "user") {
    const Webk = () => {
      useMemo(() => {
        async function getModulesUser() {
          const response = await axios.get(`${urlServer}/getMod/${token1}`);

          const modules = response.data.data;
          modules.map((item) => {
            return setUsersP([...usersP, usersP.push(item.titulo)]);
          });
        }
        getModulesUser();
      }, []);
    };
    Webk();
    let toke = token ? token : null;
    usersData.tokeVerify = toke;
    usersData.permisions = usersP;
  }

  if (type === "superAdmin") {
    let tokeVerify = token ? token : null;
    usersData.permisions = [
      dataIsAllowed[0].nombre,
      dataIsAllowed[1].nombre,
      dataIsAllowed[3].nombre,
      dataIsAllowed[2].nombre,
      dataIsAllowed[4].nombre,
      dataIsAllowed[5].nombre,
      dataIsAllowed[6].nombre,
      dataIsAllowed[7].nombre,
      dataIsAllowed[8].nombre,
      dataIsAllowed[9].nombre,
      dataIsAllowed[10].nombre,
      dataIsAllowed[11].nombre,
      dataIsAllowed[12].nombre,
      dataIsAllowed[13].nombre,
      dataIsAllowed[14].nombre,
      dataIsAllowed[15].nombre,
      dataIsAllowed[16].nombre,
      dataIsAllowed[17].nombre,
      dataIsAllowed[18].nombre,
      dataIsAllowed[19].nombre,
    ];
    usersData.tokeVerify = tokeVerify;
  }

  const [users, setUsers] = useState(usersData);

  return (
    <>
      <UserContextData>
        <GetUsersContext>
          <Routes>
            <Route path="/prueba" element={<Prueba />} />
            <Route path="*" element={<NotFount />} />

            <Route path="/login" element={<AuthUser />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/newPassword+auth=true" element={<NewPassword />} />
            <Route
              path="/recovery+password/identify"
              element={<RecoveryPass />}
            />
            <Route path="/verifyc+code/identify" element={<CodePassword />} />
            <Route path="/signup" element={<Signup />} />

            <Route index element={<HomePage />} />
            <Route
              path={`${dataIsAllowed[1].url}/*`}
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("bodega")}
                  redirectTo="/bodega"
                >
                  <Inventory />
                </ProtectedRouter>
              }
            >
              <Route path="inventory/:id/*" element={<ConfigInventory />}>
                <Route
                  path="TrasladarProduct/:id"
                  element={<TranslateProduct />}
                />
              </Route>
              <Route path="" element={<div></div>} />
            </Route>
            <Route
              path={dataIsAllowed[13].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[13].nombre)
                  }
                >
                  <AyudaAdmin />
                </ProtectedRouter>
              }
            />

            <Route
              path="/dasboard/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("dasboard")}
                >
                  <Admin />
                </ProtectedRouter>
              }
            >
              <Route path="" element={<HomeDaboard />} />
              <Route path="users/:id/*" element={<UsersDasboard />}>
                <Route path="usersInfo/:id" element={<UserInfo />} />
              </Route>
              <Route path="productos/:id" element={<ProductoDasboard />} />
              <Route path="categorias/:id" element={<CategoryDasboard />} />

              <Route path="proveedores/:id/*" element={<ProvidersDasboard />}>
                <Route
                  path="categoryProvider/:id"
                  element={<GetCategoryProvider />}
                />
              </Route>
            </Route>
            <Route
              path={dataIsAllowed[2].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[2].nombre)
                  }
                  redirectTo={dataIsAllowed[2].url}
                >
                  <Usuarios />
                </ProtectedRouter>
              }
            />

            <Route
              path="/permisions/:id"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("superAdmin")}
                  redirectTo="/bodega"
                >
                  <ModalModule />
                </ProtectedRouter>
              }
            />
            <Route
              path="/notificaciones/*"
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users && users.permisions.includes("notificaciones")
                  }
                  redirectTo="/notificaciones"
                >
                  <Notification />
                </ProtectedRouter>
              }
            >
              <Route path="" element={<HomeNotification />} />
              <Route
                path="notification/users"
                element={<UsersNotification />}
              />
              <Route
                path="notification/product"
                element={<ProductNotification />}
              />
              <Route path="notification/bodega" element={<InventoryNotify />} />
              <Route
                path="notification/category"
                element={<CategoryNotify />}
              />
              <Route
                path="notification/provider"
                element={<ProviderNotifyc />}
              />
              <Route path="notification/pedidos" element={<PedidosNotify />} />
              <Route path="notification/ventas" element={<VentasNotify />} />
              <Route
                path="notification/ProductVencer"
                element={<ProductAgotados />}
              />
            </Route>
            <Route
              path="/admin/productos/editar/:id"
              element={
                <ProtectedRouter
                  isAllowed={!!users}
                  redirectTo={dataIsAllowed[1].url}
                >
                  <EditarProduct />
                </ProtectedRouter>
              }
            />
            <Route
              path={dataIsAllowed[5].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[5].nombre)
                  }
                  redirectTo={dataIsAllowed[5].url}
                >
                  <Product />
                </ProtectedRouter>
              }
            />
            <Route
              path={dataIsAllowed[3].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[3].nombre)
                  }
                  redirectTo={dataIsAllowed[3].url}
                >
                  <Category />
                </ProtectedRouter>
              }
            />
            <Route
              path={dataIsAllowed[6].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[6].nombre)
                  }
                  redirectTo={dataIsAllowed[6].url}
                >
                  <Provider />
                </ProtectedRouter>
              }
            />
            <Route
              path="/analityc/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("analityc")}
                  redirectTo="/analityc"
                >
                  <Analitycs />
                </ProtectedRouter>
              }
            >
              <Route path="" element={<ChartHome />}></Route>
              <Route path="AnBodega/:id" element={<ChartBodega />}></Route>

              <Route
                path="TodoComands/:id"
                element={<ComandsSistemA />}
              ></Route>
              <Route
                path="AnProductos/:id"
                element={<ChartProductos />}
              ></Route>
            </Route>
            <Route
              path={dataIsAllowed[9].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[0].nombre)
                  }
                >
                  <Perfil />
                </ProtectedRouter>
              }
            />
            <Route
              path={dataIsAllowed[18].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[18].nombre)
                  }
                >
                  <Trae />
                </ProtectedRouter>
              }
            />
            <Route
              path="/pedidos/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("pedidos")}
                  redirectTo="/pedidos"
                >
                  <Shope />
                </ProtectedRouter>
              }
            >
              <Route path="ListPedidos" element={<DataTablePedido />} />
              <Route path="" element={<FormPedido />}>
                <Route path="bodega/:id" element={<h1>Hola mundo</h1>} />
              </Route>
            </Route>

            <Route
              path="/venta/*"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("venta")}
                  redirectTo="/venta"
                >
                  <Ventas />
                </ProtectedRouter>
              }
            >
              <Route path="" element={<FormSalida />}>
                <Route path="bodega/:id" element={<h1>Hola mundo</h1>} />
              </Route>
              <Route path="AllVentas/*" element={<DatatableVentas />}>
                <Route path="viewPdf" element={<ComprasPDF />} />
              </Route>
            </Route>
            <Route path="/somos" element={<Somos />} />
            <Route path="/contactanos" element={<Contactanos />} />

            <Route
              path="/settings"
              element={
                <ProtectedRouter
                  isAllowed={!!users && users.permisions.includes("config")}
                  redirectTo="/config"
                >
                  <ConfigAdmin />
                </ProtectedRouter>
              }
            />
            <Route
              path={dataIsAllowed[17].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[17].nombre)
                  }
                  redirectTo={dataIsAllowed[17].url}
                >
                  <InventoryGeneral />
                </ProtectedRouter>
              }
            />
            <Route
              path={dataIsAllowed[19].url}
              element={
                <ProtectedRouter
                  isAllowed={
                    !!users &&
                    users.permisions.includes(dataIsAllowed[19].nombre)
                  }
                  redirectTo={dataIsAllowed[19].url}
                >
                  <Licence />
                </ProtectedRouter>
              }
            />
          </Routes>
        </GetUsersContext>
      </UserContextData>
    </>
  );
};
