// ==> Dependencies
import mongoose from 'mongoose';

// ==> Config
import config from '../Config/mongo.config';

/**
 * Connect open to mongoose a brigde with MongoDB cluster
 *
 * @param { String } [forcedURI=null] forcing mongoose connect in that URI, ignoring config values. If null or empty mongoose assumes config value in current node running mode [development|production]
 */
const connect = (forcedURI = null) => {
    let uri = config;
    if (forcedURI) {
        uri = forcedURI;
    }

    // ==> Create connection listeners
    mongoose.connection.on('connected', () => {
        console.log('[MONGO] Connected');
    });
    mongoose.connection.on('disconnected', () => {
        console.warn('[MONGO] Disconnected');
    });
    mongoose.connection.on('error', err => {
        console.error(`[MONGO] An error occurred: ${err.message}`);
    });
    mongoose.connection.on('open', () => {
        console.log('[MONGO] Ready');
    });

    // Connecting
    mongoose.connect(uri, {
        keepAlive: true,
        useNewUrlParser: true,
    });
    mongoose.Promise = global.Promise;
};

export default {
    connect,
};
