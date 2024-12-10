const ambiente = 'local';
const urlAmbiente = {
    local:
    {
        host: 'http://157.230.60.3:3001',
    },
};

const initConfig = {
    ambiente: ambiente,
    host: urlAmbiente[ambiente].host,
}

export default initConfig;
