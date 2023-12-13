import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const player = await prisma.Player.createMany({
data: [
    {firstname:"Sergio", lastname:"Rochet", age: 33, team:"Internacional"},
    {firstname:"Franco", lastname:"Israel", age: 23, team:"Sporting CP"},
    {firstname:"Santiago", lastname:"Mele", age: 26, team:"Junior"},
    {firstname:"Ronald", lastname:"Araujo", age: 24, team:"Barcelona"},
    {firstname:"Jose Maria", lastname:"Gimenez", age: 28, team:"Atletico Madrid"},
    {firstname:"Sebastian", lastname:"Caceres", age: 24, team:"America"},
    {firstname:"Matias", lastname:"Viña", age: 26, team:"Sassuolo"},
    {firstname:"Bruno", lastname:"Mendez", age: 24, team:"Corinthias"},
    {firstname:"Guillermo", lastname:"Varella", age: 30, team:"Flamengo"},
    {firstname:"Matias", lastname:"Olivera", age: 26, team:"Napoli"},
    {firstname:"Manuel", lastname:"Ugarte", age: 22, team:"PSG"},
    {firstname:"Rodrigo", lastname:"Bentancur", age: 26, team:"Tottenham"},
    {firstname:"Federico", lastname:"Valverde", age: 25, team:"Real Madrid"},
    {firstname:"Felipe", lastname:"Caraballo", age: 27, team:"Gremio"},
    {firstname:"Agustin", lastname:"Canobbio", age: 25, team:"Paranaense"},
    {firstname:"Nicolas", lastname:"De la cruz", age: 26, team:"River Plate"},
    {firstname:"Giorgian de", lastname:"Arrascaeta", age: 29, team:"Flamengo"},
    {firstname:"Facundo", lastname:"Pellistri", age: 21, team:"Manchester United"},
    {firstname: "Maximiliano", lastname:"Araujo", age: 23, team: "Toluca"},
    {firstname: "Facundo", lastname:"Torres", age: 23, team: "Orlando City"},
    {firstname: "Cristian", lastname:"Olivera", age: 21, team: "Los Angeles FC"},
    {firstname: "Federico", lastname:"Viña", age: 25, team: "Leon"},
    {firstname: "Darwin", lastname:"Nuñez", age: 24, team: "LiverPol"},
    {firstname: "Luis", lastname:"Suarez", age: 36, team: "Gremio"},
    ],
});