import express, { Express } from 'express';
import { routes } from './routes/routes';
import cors from 'cors';

import { cid } from './middlewares/cid.middleware';
import { log } from './middlewares/log.middleware';
import { errorHandling } from './middlewares/error_handling.middleware';
import { database } from './database/database';

const app: Express = express();

app.use(cid); //Middleware cid
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(log);

//configuração das rotas
app.use(routes);

// Testar a conexão
// (async () => {
//     console.log(await database.query('select now() as data_atual', []));
// })();

//Tratativa de erros da aplicação
app.use(errorHandling);

export { app };
