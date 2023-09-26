let accessToken = sessionStorage.getItem("secure_token");
import { dataIsAllowed } from "./lowed.Modules";
import CryptoJS from "crypto-js";
export const getTokenAuth =(action) => {
    // encripta la action del usuario
    let secretKey = '#$%^fuhFFH!@';
    let jsonString = JSON.stringify(action);
    let encryptedData = CryptoJS.AES.encrypt(jsonString, secretKey);
    let decodeAction = encryptedData.toString();
    // envio del encabezado del token de seguridad
    let headers = {
        Authorization: `Bearer ${accessToken}`,
        Action: decodeAction,
        dateAction: new Date().getTime(),
        role: dataIsAllowed[0].nombre,
        accept: "application/json",
    };
    return headers;
};



export const getTokenAuthFile = (action) => {

    let secretKey = '#$%^fuhFFH!@';
    let jsonString = JSON.stringify(action);
    let encryptedData = CryptoJS.AES.encrypt(jsonString, secretKey);
    let decodeAction = encryptedData.toString();

    let headers = {
        Authorization: `Bearer ${accessToken}`,
        Action: decodeAction,
        dateAction: new Date().getTime(),
        role: dataIsAllowed[0].nombre,
        // "Content-Type": "multipart/form-data",
        
    };
    return headers;
};
