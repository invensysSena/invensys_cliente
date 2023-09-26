// if (response.data.type === "user") {
//     let arraysessionStorageModul = response.data.module;
//     if (response.status === 200) {
//       toast.success("Cargando...", {
//         position: toast.POSITION.TOP_RIGHT,
//         theme: "dark",
//         timeOut: 1000,
//       });
//       let arrayModule = "";
//       for (
//         let i = 0;
//         i < arraysessionStorageModul.length;
//         i++
//       ) {
//         arrayModule = arraysessionStorageModul[i].titulo;
//       }
//       let getData = response.data;
//       let url = getData.module[0];
//       sessionStorage.setItem("secure_token", getData.token);
//       sessionStorage.setItem("auth_cuenta", getData.auth);
//       sessionStorage.setItem(
//         "response_auth",
//         getData.message
//       );
//       sessionStorage.setItem("module", arrayModule);
//       sessionStorage.setItem(
//         "token_token1",
//         getData.token1
//       );
//       sessionStorage.setItem("correo", values.email);
//       sessionStorage.setItem("type", response.data.type);
//       let now = moment().format();
//       sessionStorage.setItem("fecha", now);
//       if (response.data.type === "user") {
//         window.location = `/${url.titulo}`;
//       }
//     }
//     if (response.response.status === 400) {
//       setSpiner(true);
//       toast.error("Este usuario no existe", {
//         position: toast.POSITION.TOP_RIGHT,
//         theme: "dark",
//       });
//     } else if (response.response.status === 401) {
//       toast.warning("La contraseña es incorrecta", {
//         position: toast.POSITION.TOP_RIGHT,
//         theme: "dark",
//       });
//       setSpiner(true);
//     }
//   } else {
//     toast.error(
//       "No cuentas con acceso verifica con el administrador ",
//       {
//         position: toast.POSITION.TOP_RIGHT,
//         theme: "dark",
//       }
//     );
//     setSpiner(true);
//   }
//   if (response.status === 200) {
//     toast.success("Cargando...", {
//       position: toast.POSITION.TOP_RIGHT,
//       theme: "dark",
//     });
//     let getData = response.data;
//     sessionStorage.setItem("secure_token", getData.token);
//     sessionStorage.setItem("auth_cuenta", getData.auth);
//     sessionStorage.setItem(
//       "response_auth",
//       getData.message
//     );
//     sessionStorage.setItem("perfil_rol", getData.rol);
//     sessionStorage.setItem("type", getData.rol);
//     setSpiner(true);
//     window.location.href = "/perfil";
//   }
//   if (response.response.status === 400) {
//     setSpiner(true);
//     toast.error("Este usuario no existe", {
//       position: toast.POSITION.TOP_RIGHT,
//       theme: "dark",
//     });
//   } else if (response.response.status === 401) {
//     toast.warning("La contraseña es incorrecta", {
//       position: toast.POSITION.TOP_RIGHT,
//       theme: "dark",
//     });
//     setSpiner(true);
//   }

import { rolesPemissionsRouter } from "./RolesRouter";

export const AuthLogin = async(response) => {
    console.log(response)
}

export const  AuthGoogleAdmin = async (response) => {
    let getData = response;
    sessionStorage.setItem("secure_token", getData.token);
    sessionStorage.setItem("auth_cuenta", getData.auth);
    sessionStorage.setItem("response_auth", getData.message);
    sessionStorage.setItem("perfil_rol", getData.rol);
    sessionStorage.setItem("type", getData.rol);
    sessionStorage.setItem("email", getData.email);
    await  rolesPemissionsRouter()
}

export const  logoutAuth = () => {
    sessionStorage.clear();

}