// ==> Importig modules
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import logger from 'morgan';

// ==> Getting configs
import config from './Config/api.config';

// ==> Getting modules
import Mongo from './Functions/mongo.functions';
import Routers from './Routers';

// ==> Create new express application
const app = express();

// ==> Inject dependencies
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(logger(config.isDev ? 'dev' : 'tiny'));

// ==> Injecting routers
app.use('/api', Routers);

// ==> Starting server
const server = app.listen(config.port, err => {
    if (err) throw err;

    // ==> Showing API running infos
    console.log('==> Services');
    console.log('[API] ...ONLINE!');
    console.log('\n==> Env');
    console.log(`[API] Mode: ${config.mode}`);
    console.log(`[API] Port: ${config.port}`);
    console.log('\n==> URLs');
    console.log(
        `[API] Entry: ${
            server.address().address == '::'
                ? 'http://127.0.0.1:'
                : server.address().address
        }:${config.port}`,
    );
    console.log(
        `[API] Check: ${
            server.address().address == '::'
                ? 'http://127.0.0.1:'
                : server.address().address
        }:${config.port}/api/run`,
    );

    // ==> Connecting on Database
    console.log('\n==> Database');
    Mongo.connect();
});
