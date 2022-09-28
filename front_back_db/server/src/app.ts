import express from 'express';
import 'reflect-metadata';
import { json } from 'body-parser';
import { dashboardRouter } from './Routes/dashboard';
import './db';

const app = express();

app.use(json());

app.use(dashboardRouter);

app.all('*', () => {
  throw new Error('Route not found');
});

export { app };