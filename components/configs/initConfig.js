const ambiente = 'local';
const urlAmbiente = {
    local:
    {
        host: 'http://192.168.1.23:3002',
    },
};

const initConfig = {
    ambiente: ambiente,
    host: urlAmbiente[ambiente].host,
}

export default initConfig;
