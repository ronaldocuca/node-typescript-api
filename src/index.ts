import { SetupServer } from './server';
import config from 'config';

const port : number =  (process.env.PORT || 3000) as number;
const env = process.env.NODE_ENV;

(async (): Promise<void> => {
    let defaultPort = 3000;

    if (env === 'production') {
        defaultPort = port;
    } else {
        defaultPort = config.get('App.port');
    }
    const server = new SetupServer(defaultPort);
    await server.init();
    server.start();
})();
