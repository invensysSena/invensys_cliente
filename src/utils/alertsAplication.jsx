import {  toast } from "react-toastify";


export  const messageWarding = (message)=>{
    return toast.warn(`${message}' `, {
     position: "bottom-right",
     autoClose: true,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     });
   }

   export const messageSuccess = (message)=>{
    return toast.success(`
     ${message}' 
   `, {
     position: "bottom-right",
     autoClose: true,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     });
   }

    export const messageError = (message)=>{
    return toast.error(`
     ${message}'
    `, {
        position: "bottom-right",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    export const messageInfo = (message)=>{
    return toast.info(`${message}'`, {
        position: "bottom-right",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }