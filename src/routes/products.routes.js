// Esto sería la carpeta de las rutas en LARAVEL
import { Router } from 'express'
import { prisma } from '../db.js'

const router = Router()

// Lo que viene en la funcion podemos separarlo en un CONTROLADOR
// Algo muy similar a LARAVEL
router.get('/products', async (req, res) => {
    const products = await prisma.product.findMany()
    res.json(products) // Enviamos la respuesta
})

// Los datos que vienen por parametros, son de tipo STRING
// si necesitamos que sean de otro tipo, como INTEGER
// los tenemos que parsear
router.get('/products/:name', async (req, res) => {
    const name = req.params.name
    const productFound = await prisma.product.findFirst({ 
        // Utilizamos sintaxis del ORM
        where: {
            name: name // El "name" que viene por parametros
        } 
     })

     if (!productFound) return res.status(404).json({ error: "Product not found"})

     return res.status(201).json(productFound)
})

// Creamos un producto
router.post('/products', async (req, res) => {
    // Esperamos los datos a cargar en el BODY
    const newProduct = await prisma.product.create({
        data: req.body
    })
    res.json(newProduct)
})

router.delete('/products/:name', async (req, res) => {
    const name = req.params.name
    const productFound = await prisma.product.delete({ 
        // Utilizamos sintaxis del ORM
        where: {
            name: name // El "name" que viene por parametros
        } 
     })

     if (!productFound) return res.status(404).json({ error: "Product not found"})

     return res.status(201).json(productFound)
})

export default router