let accessToken = localStorage.getItem("secure_token");
// let accesToken1 = localStorage.getItem("token_token1");
import { dataIsAllowed } from "../secure/lowed.Modules";



export const getTokenAuth = () => {

    let headers = {
        Authorization: `Bearer ${accessToken}`,
        Action: "$BNDsjds5438594",
        date: new Date().getTime(),
        role: dataIsAllowed[0].nombre,
    };
    return headers;
};
