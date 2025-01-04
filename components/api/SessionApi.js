import initConfig from "../configs/initConfig";
import axios from 'axios';

const INICIAR_SESION_URL = initConfig.host + "/usuarios/obtenerLoginUsuario";
const CREAR_USUARIO_URL = initConfig.host + "/usuarios/crearUsuario";

export function iniciar_sesion(data) {

    return axios.post(
        
        `${INICIAR_SESION_URL}`, 
        data,
        {
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

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