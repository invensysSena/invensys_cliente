let accessToken = sessionStorage.getItem("secure_token");
import { dataIsAllowed } from "../secure/lowed.Modules";
export const getTokenAuth = () => {
    let headers = {
        Authorization: `Bearer ${accessToken}`,
        Action: "$BNDsjds5438594",
        dateAction: new Date().getTime(),
        role: dataIsAllowed[0].nombre,
    };
    return headers;
};
export const getTokenAuthImg = () => {
    let headers = {
        Authorization: `Bearer ${accessToken}`,
        Action: "$BNDsjds5438594",
        dateAction: new Date().getTime(),
        role: dataIsAllowed[0].nombre,
        "Content-Type": "multipart/form-data",
    };
    return headers;
};
