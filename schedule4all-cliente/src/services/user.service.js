import http from "../http-common";

class UserService {
    getAll(){
        return http.get("/usuarios");
    }

    get(id){
        return http.get(`/usuarios/${id}`);
    }

    create(data){
        return http.post("/usuarios", data);
    }

    update(id, data){
        return http.put(`/usuarios/${id}`, data);
    }

    delete(id){
        return http.delete(`/usuarios/${id}`);
    }

    deleteAll(){
        return http.delete(`/usuarios`);
    }

    findByEmails(correo){
        return http.get(`/usuarios/correo=${correo}`);
    }

    findByNombre(nombre){
        return http.get(`/usuarios?nombre=${nombre}`);
    }
}

export default new UserService();