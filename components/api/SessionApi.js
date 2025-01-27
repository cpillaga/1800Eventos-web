import initConfig from "../configs/initConfig";
import axios from 'axios';

// const INICIAR_SESION_URL =  "https://certificadocacup.com/api/usuarios/obtenerLoginUsuario";
const INICIAR_SESION_URL =  "http://localhost:3002/api/auth/login";
const CREAR_USUARIO_URL =  "http://localhost:3002/api/usuarios/crearUsuario";
const ACTUALIZAR_USUARIO_URL =  "http://localhost:3002/api/usuarios/actualizarUsuario";

// const INICIAR_SESION_URL = initConfig.host + "/api/usuarios/obtenerLoginUsuario";
// const CREAR_USUARIO_URL = initConfig.host + "/api/usuarios/crearUsuario";

export async function iniciar_sesion(data) {
    try {
        const response = await axios.post(
            `${INICIAR_SESION_URL}`, 
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: 50000
            }
        );
        console.log("Respuesta exitosa:", response);
        return response;
    } catch (err) {
        if (err.response) {
            console.log("Error en la solicitud:", err.response.data);
            throw err; 
        } else {
            console.log("Error desconocido:", err);
            throw new Error('Error al conectar con el servidor');
        }
    }
}


export function crear_usuario(data) {
    
    return axios.post(
        
        `${CREAR_USUARIO_URL}`, 
        data,
        {       
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}

export function editar_usuario(id,data) {
    
    return axios.put(
        
        `${ACTUALIZAR_USUARIO_URL}/${id}`, 
        data,
        {       
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}