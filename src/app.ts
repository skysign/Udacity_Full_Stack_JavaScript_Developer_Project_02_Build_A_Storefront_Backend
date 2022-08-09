import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { logger, stream } from './config/winston';
import routerAPIs from './routes/api';

const app = express();
app.use(morgan('combined', { stream }));

app.use('/api/v1', routerAPIs);

app.get('/', (_req: Request, res: Response) => {
  res.send('my index');
});

app.get('/welcome', (_req: Request, res: Response) => {
  res.send('welcome!');
});

app.listen('3000', () => {
  logger.debug('🛡️ Server listening on port: 3000');
});
