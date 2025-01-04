const ambiente = 'produccion';
const urlAmbiente = {
    local:
    {
        host: 'http://192.168.1.23:3002',
    },
    produccion:
    {
        host: 'https://certificadocacup.com/api'
    }
};

const initConfig = {
    ambiente: ambiente,
    host: urlAmbiente[ambiente].host,
}

export default initConfig;
