import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Jugadores = async (req, res) => {
const findPLayer = await prisma.Player.findMany()
res.json(findMany.Player)
};

const CrearJugador = async (req, res) => {
    const {firstname, lastname, age, team} = req.body;
        try {
            const CrearP = await prisma.player.create({
            date: {firstname, lastname, age, team}
            });
            res.json(CrearJugador) 
        }
    
        catch{(console).error}("Error 500, No se pudo crear jugador");
    };

export {CrearJugador}

export {Jugadores};