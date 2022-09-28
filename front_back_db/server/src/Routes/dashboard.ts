import express from 'express';
import { projects } from '../Controllers/projects.controller';

const router = express.Router();

router.get('/api/v1/projects', projects);

export { router as dashboardRouter };