import initConfig from "../configs/initConfig";
import axios from 'axios';

const CONSULTAR_LOCALIDAD_POR_ID_EVENTO = initConfig.host + "/api/localidades/getLocationByEventId";

export function consultar_localidad(idEvento) {
    
    console.log("URL: ", `${CONSULTAR_LOCALIDAD_POR_ID_EVENTO}/${idEvento}`);

    return axios.get(
        `${CONSULTAR_LOCALIDAD_POR_ID_EVENTO}/${idEvento}`, 
        {
            timeout: 50000
        }
    )
    .then(r => r)
    .catch(err => err)
}
