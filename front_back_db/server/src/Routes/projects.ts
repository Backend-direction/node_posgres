import express from 'express';
import { getProjectList, createProject } from '../Controllers/projects.controller';
const multer = require('multer');

const router = express.Router();

//configure multer
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (_req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });

router.get('/v1/projects', getProjectList);

router.post('/v1/project', upload.single('image'), createProject);


export { router as projectRouter };