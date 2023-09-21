import axios from "axios";
import { getTokenAuth, getTokenAuthFile } from "../auth/verifyAuth";


export const ApiPost = async (urlServer,path,method,action,data) => (
    await axios({
        url:`${urlServer}/${path}`,
        method:method,
        headers:getTokenAuth(action),
        data:data,
        timeout: 5000,
        auth:"Bearer",
        accept: "application/json",
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        agent: "agent",
        transport: "transport",
        cancelToken: "cancelToken",
        xsrfCookieName: "xsrfCookieName",

    })
)
export const ApiGet = async(urlServer,path,method,action,params) => (
    await axios({
        url:`${urlServer}/${path}/?q=${params}`,
        method:method,
        headers:getTokenAuth(action),
        data:params,
        timeout: 5000,
        accept: "application/json",
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        agent: "agent",
        transport: "transport",
        formSerializer: "formSerializer",
        baseURL: "baseURL",
       
    })
)
export const ApiPut = async (urlServer,path,method,action,data,params) => (
    await axios({
        url:`${urlServer}/${path}/?q=${params}`,
        method:method,
        headers:getTokenAuth(action),
        data:data,
        timeout: 5000,
        accept: "application/json",
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        agent: "agent",
        transport: "transport",
        formSerializer: "formSerializer",
        baseURL: "baseURL",
    })
)

export const ApiDelete = async (urlServer,path,method,action,params) => (
    await axios({
        url:`${urlServer}/${path}/?=query${params}`,
        method:method,
        headers:getTokenAuth(action),
        data:{},
        timeout: 5000,
        auth:"Bearer",
        accept: "application/json",
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        agent: "agent",
        transport: "transport",
        xsrfCookieName: "xsrfCookieName",
    })
)

// file 

export const ApiPutFile = async (urlServer,path,method,action,data,params) => {
    const formFile = new FormData();
    formFile.append('file', data); 
   return  await axios({
        url:`${urlServer}/${path}/?q=${params}`,
        method:method,
        headers:getTokenAuthFile(action),
        data:formFile,
        timeout: 5000,
        accept: "application/json",
        httpAgent: "httpAgent",
        timeoutErrorMessage: "timeoutErrorMessage",
        decompress: true,
        agent: "agent",
        transport: "transport",
        formSerializer: "formSerializer",
        baseURL: "baseURL",
    })
}
