import express from 'express';
import path from 'path';
import 'reflect-metadata';
import { json } from 'body-parser';
import { projectRouter } from './Routes/projects';
// import './db';

const app = express();

app.use(express.static(path.join(__dirname, '../public/uploads')));

app.use(json());

app.use(projectRouter);

app.all('*', (req) => {
  throw new Error('Route not found');
});

export { app };