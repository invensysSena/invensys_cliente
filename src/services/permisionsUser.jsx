 export const permissionsUser = (permissions, moduleUsers, method, path) => {
        const moduleIds = new Set(); // Usamos un Set para evitar duplicados
      
        permissions.forEach((permission) => {
          const moduleUser = moduleUsers.find((moduleUser) => moduleUser.idmodule === permission.idmodule);
      
          if (moduleUser && permission.typeaction === method && permission.modulo === path) {
            moduleIds.add(permission.idmodule);
          }
        });
        return Array.from(moduleIds); // Convertimos el Set a un array
      };