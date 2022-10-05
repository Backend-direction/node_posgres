import express from 'express';
import 'reflect-metadata';
import { json } from 'body-parser';
import { projectRouter } from './Routes/projects';
import './db';

const app = express();

app.use(json());

app.use(projectRouter);

app.all('*', (req) => {
  console.log('rrrrr', req.url)
  throw new Error('Route not found');
});

export { app };