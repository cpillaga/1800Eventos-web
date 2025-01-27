import initConfig from "../configs/initConfig";
import axios from 'axios';

const CONSULTAR_ETAPA_POR_ID_EVENTO = initConfig.host + "/api/etapas/getEtapaByEventId";

export function consultar_etapa(idEvento) {
    
    console.log("URL: ", `${CONSULTAR_ETAPA_POR_ID_EVENTO}/${idEvento}`);

    return axios.get(
        `${CONSULTAR_ETAPA_POR_ID_EVENTO}/${idEvento}`, 
        {
            timeout: 50000
        }
    )
    .then(r => {
        console.log("Respuesta del endpoint:", r.data); 
        return r.data;
    })
    .catch(err => {
        console.error("Error al consultar la etapa:", err);
        throw err; 
    });
}
