import { Request, Response } from 'express';
import AppDataSource from '../db';
import { Project } from '../Models/project';



const projects = async (req: Request, res: Response) => {
  const rawData = await AppDataSource.query(`SELECT * FROM projects`);
  
  res.send(rawData);
};

export { projects };