// ==> Mongo URIs
const config = Object.freeze({
    development: 'mongodb://127.0.0.1:27020/pagarme-transactions',
    production: 'mongodb://127.0.0.1:27020/pagarme-transactions',
});

import ApiConfig from './api.config';

export default config[ApiConfig.mode];
