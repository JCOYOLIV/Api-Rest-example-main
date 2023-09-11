import {Router} from 'express';
import { createExample, deleteExample, getExample, getOneExample, updateExample } from '../controllers/index.controllers.js'; 

const router = Router();

router.get('/example', getExample);

router.get('/example/:id', getOneExample)

router.post('/example', createExample);

router.patch('/example/:id', updateExample);

router.delete('/example/:id', deleteExample);


export default router;