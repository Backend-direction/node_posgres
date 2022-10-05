import express from 'express';
import { projects } from '../Controllers/projects.controller';

const router = express.Router();

router.get('/projects', projects);

export { router as projectRouter };