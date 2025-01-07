import initConfig from "../configs/initConfig";
import axios from 'axios';

const CONSULTAR_EVENTOS_URL = initConfig.host + "/api/eventos/obtenerEventos";
const CONSULTAR_IMAGEN_EVENTOS_URL = initConfig.host + "/api/eventos/consultarImagenEvento";

export function consultar_eventos() {
    
    console.log("URL: ", CONSULTAR_EVENTOS_URL)

    return axios.get(
        
        `${CONSULTAR_EVENTOS_URL}`, 
        {
            // headers: {
            //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjdkODJiNmYxZTg0MTUzYzVjMDFiNTkyNDhiMmQ1OGQ4OmFhNDRmYjc5YmE4MzZhMGFhNDgyYTYzNzMwOTMwYjQxODJlZTkwNTcxZmVjNmMzN2E3MTMzYTA0MzAxYjQ2NjZiNTI0MGE3Njk2NWE2YTQ5NjFiYzgwMWE5YzRmZDNiYzUwODZlOWQyNjFlYzM1ODM1ZTg5MDQwNGVhNjg1ZGZlZGZiZTJiZDY4Mzk4ZGQ4ZWUwODUxYjc1ZWUxN2M1ZWRiZDcwMzcwZTkyMmY1OGU2NGFiZGE2Y2M0ZGQzYWFmOGY5YWI5YTBmYjM0ZmEwNmFkNjRmYTk1MzU4ODI1OTcwZWRhZTBkZDcwMmFhN2RhY2NmMWFhN2NiNGY1ZmQyZWQ0Y2RjNGM1ZjZhZDMzNzFhYzMxZjQ0ODIxMGRlOWUzMzBjMzNjZDY3YTU0MjhlYzk1NmE5MjQxMzRhNDNlOGE0IiwiaWF0IjoxNzMzNzgxNTc3LCJleHAiOjE3MzM3ODE1Nzd9.88adcXyUWh4fwXeL5hopX784k4ezJsmo8D1oGR8Np4E`
            // },
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}


export function consultar_imagen_eventos(id) {
    
    console.log("URL: ", CONSULTAR_IMAGEN_EVENTOS_URL)

    return axios.get(
        
        `${CONSULTAR_IMAGEN_EVENTOS_URL+'/'+id}`, 
        {
            // headers: {
            //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjdkODJiNmYxZTg0MTUzYzVjMDFiNTkyNDhiMmQ1OGQ4OmFhNDRmYjc5YmE4MzZhMGFhNDgyYTYzNzMwOTMwYjQxODJlZTkwNTcxZmVjNmMzN2E3MTMzYTA0MzAxYjQ2NjZiNTI0MGE3Njk2NWE2YTQ5NjFiYzgwMWE5YzRmZDNiYzUwODZlOWQyNjFlYzM1ODM1ZTg5MDQwNGVhNjg1ZGZlZGZiZTJiZDY4Mzk4ZGQ4ZWUwODUxYjc1ZWUxN2M1ZWRiZDcwMzcwZTkyMmY1OGU2NGFiZGE2Y2M0ZGQzYWFmOGY5YWI5YTBmYjM0ZmEwNmFkNjRmYTk1MzU4ODI1OTcwZWRhZTBkZDcwMmFhN2RhY2NmMWFhN2NiNGY1ZmQyZWQ0Y2RjNGM1ZjZhZDMzNzFhYzMxZjQ0ODIxMGRlOWUzMzBjMzNjZDY3YTU0MjhlYzk1NmE5MjQxMzRhNDNlOGE0IiwiaWF0IjoxNzMzNzgxNTc3LCJleHAiOjE3MzM3ODE1Nzd9.88adcXyUWh4fwXeL5hopX784k4ezJsmo8D1oGR8Np4E`
            // },
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}