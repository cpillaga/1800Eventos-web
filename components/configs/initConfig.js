const ambiente = 'produccion';
const urlAmbiente = {
    local:
    {
        host: 'http://192.168.1.11:3005/api'
    },
    produccion:
    {
        host: 'https://certificadocacup.com'
    }
};

const initConfig = {
    ambiente: ambiente,
    host: urlAmbiente[ambiente].host, 
}

export default initConfig;
