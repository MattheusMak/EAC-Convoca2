import {Router} from 'express';
import {HelloWorld} from './controllers/hello-world-controller.js';
 
const router = Router();

router.get('/', HelloWorld)

export { router };

