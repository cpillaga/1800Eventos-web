import initConfig from "../configs/initConfig";
import axios from 'axios';

const CREAR_TICKETS_URL = initConfig.host + "/tickets/crearTickets";
const OBTENER_TICKETS_URL = initConfig.host + "/tickets/obtenerTicketsPorUsuario"

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