import { PrismaClient } from '@prisma/client' // Para crea una conexion con la DB

// Como es una clase, tenemos que instanciarla
export const prisma = new PrismaClient()