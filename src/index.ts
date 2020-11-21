import { SetupServer } from './server';
import config from 'config';
const port =  process.env.PORT;
(async (): Promise<void> => {
    const server = new SetupServer(config.get('App.port'));
    await server.init();
    server.start();

    console.log('port: ', port)
})();
