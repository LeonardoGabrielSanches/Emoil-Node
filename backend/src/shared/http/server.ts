import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import '../database';
import '../container';
import '../jobs';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(400).json({
      status: 'error',
      message: err.message,
    });
  },
);

app.listen(3333, () => {
  console.log('🚀 Api is running');
});
