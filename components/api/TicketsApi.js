import initConfig from "../configs/initConfig";
import axios from 'axios';

const CREAR_TICKETS_URL = initConfig.host + "/api/tickets/crearTickets";
const OBTENER_TICKETS_URL = initConfig.host + "/api/tickets/obtenerTicketsPorUsuario"

export function crear_tickets(data) {
    
    return axios.post(
        
        `${CREAR_TICKETS_URL}`, 
        data,
        {
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}

export function obtener_tickets(data) {
    data  = { user:'678e811f804468eed732cfc4' };//borrar solo prueba
    return axios.post(
        
        `${OBTENER_TICKETS_URL}`, 
        data,
        {
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}