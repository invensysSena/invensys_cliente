import {  toast } from "react-toastify";


export  const messageWarding = (message)=>{
    return toast.warn(`${message}`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
     });
   }

   export const messageSuccess = (message)=>{
    return toast.success(`
     ${message}
   `, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
     });
   }

    export const messageError = (message)=>{
    return toast.error(`
     ${message}
    `, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
        });
    }
    export const messageInfo = (message)=>{
    return toast.info(`${message}`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
        });
    }