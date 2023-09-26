export const  ActionUser = {
    GETALLADMIN_PERMISSIONS:{
        path:"user/perfil",
        method:"GET",
        DATE:new Date().getTime(),
    },
    GETALLADMIN_UPDATE:{
        path:"user/getAdminAll",
        method:'PUT',
        DATE:new Date().getTime(),

    },
    GETALLADMIN_UPDATE_IMG:{
        path:"user/AuploadImageA",
        method:'PUT',
        DATE:new Date().getTime(),
    },
    GETALL_COMPANY:{
        path:"user/company", 
    },
    METHOD_GET:{
        GET:"GET",
        PUT:"PUT",
        POST:"POST",
        DELETE:"DELETE",
    },
    DATE:new Date().getTime(),
    ROOTNAME:{
        ROOT:"root",
        ADMIN:"admin",
        USER:"user",
    
    }


} 