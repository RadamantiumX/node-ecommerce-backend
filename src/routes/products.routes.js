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

// Buscamos un producto
// Los datos que vienen por parametros, son de tipo STRING
// si necesitamos que sean de otro tipo, como INTEGER
// los tenemos que parsear
router.get('/products/:name', async (req, res) => {
    const name = req.params.name
    const productFound = await prisma.product.findFirst({ 
        // Utilizamos sintaxis del ORM
        where: {
            name: name // El "name" que viene por parametros
        },
        include: {
            category: true // Le decimos que nos muestre la referencia de la relación
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

// Eliminamos un producto
router.delete('/products/:name', async (req, res) => {
    const name = req.params.name
    const productDeleted = await prisma.product.delete({ 
        // Utilizamos sintaxis del ORM
        where: {
            name: name // El "name" que viene por parametros
        } 
     })

     if (!productDeleted) return res.status(404).json({ error: "Product not found"})

     return res.status(201).json(productDeleted)
})

// Actualizamos un producto
router.put('/products/:name', async (req, res) => {
    const name = req.params.name
   const productUpdated = await prisma.product.update({
        where: {
            name: name
        },
        data: req.body // Obtenemos los datos que vamos a actualizar
    })
    return res.json(productUpdated)
})

export default router