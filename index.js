import express from 'express';
import {router} from './src/routes.js';

const app = express();

app.use('/', router)

app.use(express.json);

app.listen(3000, () => (console.log('Server running on port 3000')));