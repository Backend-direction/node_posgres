import { Request, Response } from 'express';
import AppDataSource from '../db';

const projects = async (req: Request, res: Response) => {
  const rawData = await AppDataSource.query(`SELECT * FROM projects`);
  console.log('req', req);
  res.send(rawData);
};

export { projects };