import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ChartBodega } from "../Generator/ChartBodega";
import { ChartHome } from "../Generator/ChartHome";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import { DataTablePedido } from "../components/DataTablePedido";
import { DatatableVentas } from "../components/DatatableVentas";
import { FormPedido } from "../components/FormPedido";
import { EditarProduct } from "../components/FormProduct/EditarProduct";
import { FormSalida } from "../components/FormSalida";
import Header from "../components/Header";
import { ModalModule } from "../components/ModalModule";
import { CategoryNotify } from "../components/NotificationsHeader/CategoryNotify";
import { HomeNotification } from "../components/NotificationsHeader/HomeNotification";
import { InventoryNotify } from "../components/NotificationsHeader/InventoryNotify";
import { PedidosNotify } from "../components/NotificationsHeader/PedidosNotify";
import { ProductNotification } from "../components/NotificationsHeader/ProductNotification";
import { ProviderNotifyc } from "../components/NotificationsHeader/ProviderNotifyc";
import { UsersNotification } from "../components/NotificationsHeader/UsersNotification";
import { VentasNotify } from "../components/NotificationsHeader/VentasNotify";
import { CategoryDasboard } from "../components/screen/CategoryDasboard";
import { GetCategoryProvider } from "../components/screen/GetCategoryProvider";
import { HomeDaboard } from "../components/screen/HomeDaboard";
import { ProductoDasboard } from "../components/screen/ProductoDasboard";
import { ProvidersDasboard } from "../components/screen/ProvidersDasboard";
import { UserInfo } from "../components/screen/UserInfo";
import { UsersDasboard } from "../components/screen/UsersDasboard";
import { ConfigInventory } from "../container/ConfigInventory";
import { TranslateProduct } from "../container/TranslateProduct";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { Prueba } from "../layout/Prueba";
import { Ventas } from "../layout/Ventas";
import CodePassword from "../pages/CodePassword";
import { Contactanos } from "../pages/Contactanos";
import { HomePage } from "../pages/HomePage";
import { NotFount } from "../pages/NotFount";
import RecoveryPass from "../pages/RecoveryPass";
import { Somos } from "../pages/Somos";
import NewPassword from "../pages/newPassword";
import { ComprasPDF } from "../pdf/ComprasPDF";

import { ChartProductos } from "../Generator/ChartProductos";
import { ComandsSistemA } from "../Generator/ComandsSistemA";
import { ProductAgotados } from "../components/NotificationsHeader/ProductAgotados";

import { Privaci } from "../privacy/Privaci.jsx";
import { dataIsAllowed } from "../secure/lowed.Modules";
import { Licence } from "../security/Licence";
import { urlServer } from "../urlApi/url";

//  !hjhj

import AuthUserLoadable from "../components/AuthUser.jsx";
import SignupLoadable from "../components/Signup.jsx";
import Analitycs from "../layout/Analitycs.jsx";
import AyudaAdmin from "../layout/AyudaAdmin.jsx";
import Category from "../layout/Category.jsx";
import ConfigAdmin from "../layout/ConfigAdmin.jsx";
import Inventory from "../layout/Inventory.jsx";
import InventoryGeneral from "../layout/InventoryGeneral.jsx";
import Notification from "../layout/Notification.jsx";
import Perfil from "../layout/Perfil.jsx";
import Product from "../layout/Product.jsx";
import Provider from "../layout/Provider.jsx";
import Shope from "../layout/Shope.jsx";
import Trae from "../layout/Trae.jsx";
import Usuarios from "../layout/Usuarios.jsx";
import AdminLoadable from "../pages/Admin/Admin.jsx";

// ?? g
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

  const [LoadingProgress, setLoadingProgress] = useState(0);

  const location = useLocation();
  useEffect(() => {
    // Update the loading bar when the location changes
    setLoadingProgress(0); // Reset the loading progress
    setLoadingProgress(30); // Show initial progress
    // Add any additional logic or API calls here if needed
    setLoadingProgress(100); // Complete the progress

    // Clean up the loading bar on component unmount
    return () => {
      setLoadingProgress(0); // Reset the loading progress
    };
  }, [location]);

  return (
    <>
      <UserContextData>
        <LoadingBar color="#44b2fd" progress={LoadingProgress}
          onLoaderFinished={() => {
            setLoadingProgress(0);
          }}
        />
        <Routes>
          <Route path="/privacy" element={<Privaci />} />
          <Route path="/prueba" element={<Prueba />} />
          <Route path="*" element={<NotFount />} />
          <Route path="/login" element={<AuthUserLoadable />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/newPassword+auth=true" element={<NewPassword />} />
          <Route path="/recovery+password/identify" element={<RecoveryPass />}/>
          <Route path="/verifyc+code/identify" element={<CodePassword />} />
          <Route path="/signup" element={<UserContextData><SignupLoadable /></UserContextData>}/>
          <Route index element={<HomePage />} />
          <Route path={`${dataIsAllowed[1].url}/*`}
            element={<ProtectedRouter isAllowed={!!users && users.permisions.includes("bodega")}
                redirectTo="/bodega"><GetUsersContext><Inventory /></GetUsersContext>
              </ProtectedRouter>}>
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
                  !!users && users.permisions.includes(dataIsAllowed[13].nombre)
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
                <GetUsersContext>
                  <AdminLoadable />
                </GetUsersContext>
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
                  !!users && users.permisions.includes(dataIsAllowed[2].nombre)
                }
                redirectTo={dataIsAllowed[2].url}
              >
                <GetUsersContext>
                  <Usuarios />
                </GetUsersContext>
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
            path="/notificaciones/*"element={<ProtectedRouter isAllowed={
                  !!users && users.permisions.includes("notificaciones")}redirectTo="/notificaciones"
              >
                <GetUsersContext>
                <Notification />
                </GetUsersContext>
              </ProtectedRouter>
            }
          >
            <Route path="" element={<HomeNotification />} />
            <Route path="notification/users" element={<UsersNotification />} />
            <Route
              path="notification/product"
              element={<ProductNotification />}
            />
            <Route path="notification/bodega" element={<InventoryNotify />} />
            <Route path="notification/category" element={<CategoryNotify />} />
            <Route path="notification/provider" element={<ProviderNotifyc />} />
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
                  !!users && users.permisions.includes(dataIsAllowed[5].nombre)
                }
                redirectTo={dataIsAllowed[5].url}
              >
                <GetUsersContext>

                <Product />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[3].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes(dataIsAllowed[3].nombre)
                }
                redirectTo={dataIsAllowed[3].url}
              >
                <GetUsersContext>
                <Category />

                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[6].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes(dataIsAllowed[6].nombre)
                }
                redirectTo={dataIsAllowed[6].url}
              >
                <GetUsersContext>
                <Provider />

                </GetUsersContext>
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
                <GetUsersContext>
                <Analitycs />

                </GetUsersContext>
              </ProtectedRouter>
            }
          >
            <Route path="" element={<ChartHome />}></Route>
            <Route path="AnBodega/:id" element={<ChartBodega />}></Route>

            <Route path="TodoComands/:id" element={<ComandsSistemA />}></Route>
            <Route path="AnProductos/:id" element={<ChartProductos />}></Route>
          </Route>
          <Route
            path={dataIsAllowed[9].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes(dataIsAllowed[0].nombre)
                }
              >
                <GetUsersContext>
                  <Perfil />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[18].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes(dataIsAllowed[18].nombre)
                }
              >
                <GetUsersContext>
                  <Trae />
                </GetUsersContext>
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
                <GetUsersContext>
                <Shope />
                </GetUsersContext>
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
                <GetUsersContext>
                <Ventas />

                </GetUsersContext>
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
                <GetUsersContext>

                <ConfigAdmin />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[17].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes(dataIsAllowed[17].nombre)
                }
                redirectTo={dataIsAllowed[17].url}
              >
                <GetUsersContext>
                <InventoryGeneral />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[19].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!users && users.permisions.includes(dataIsAllowed[19].nombre)
                }
                redirectTo={dataIsAllowed[19].url}
              >
                <GetUsersContext>
                <Licence />

                </GetUsersContext>
              </ProtectedRouter>
            }
          />
        </Routes>
        {/* </GetUsersContext> */}
      </UserContextData>
    </>
  );
};
