import {Router} from 'express';
import {CrearJugador, Jugadores} from './controllers/player-controllers.js';
 
const router = Router();

router.get('/player', Jugadores)

router.post('/player', CrearJugador)

router.get('/player/:id')

router.delete('/player/:id')

export { router };

