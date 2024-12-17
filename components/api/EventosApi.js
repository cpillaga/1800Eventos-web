import initConfig from "../configs/initConfig";
import axios from 'axios';

const CONSULTAR_EVENTOS_URL = initConfig.host + "/sofi/api/v1/event";

export function consultar_eventos() {

    

    return axios.post(
        
        `${CONSULTAR_EVENTOS_URL}`, 
        {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjdkODJiNmYxZTg0MTUzYzVjMDFiNTkyNDhiMmQ1OGQ4OmFhNDRmYjc5YmE4MzZhMGFhNDgyYTYzNzMwOTMwYjQxODJlZTkwNTcxZmVjNmMzN2E3MTMzYTA0MzAxYjQ2NjZiNTI0MGE3Njk2NWE2YTQ5NjFiYzgwMWE5YzRmZDNiYzUwODZlOWQyNjFlYzM1ODM1ZTg5MDQwNGVhNjg1ZGZlZGZiZTJiZDY4Mzk4ZGQ4ZWUwODUxYjc1ZWUxN2M1ZWRiZDcwMzcwZTkyMmY1OGU2NGFiZGE2Y2M0ZGQzYWFmOGY5YWI5YTBmYjM0ZmEwNmFkNjRmYTk1MzU4ODI1OTcwZWRhZTBkZDcwMmFhN2RhY2NmMWFhN2NiNGY1ZmQyZWQ0Y2RjNGM1ZjZhZDMzNzFhYzMxZjQ0ODIxMGRlOWUzMzBjMzNjZDY3YTU0MjhlYzk1NmE5MjQxMzRhNDNlOGE0IiwiaWF0IjoxNzMzNzgxNTc3LCJleHAiOjE3MzM3ODE1Nzd9.88adcXyUWh4fwXeL5hopX784k4ezJsmo8D1oGR8Np4E`
            },
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}