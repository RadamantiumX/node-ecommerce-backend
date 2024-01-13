# PRISMA

Es basicamente un ORM que nos permite realizar consultar SQL con una sintaxis mas simple. Es similiar a su contraparte de PHP, **Elocuent**.

```
npm install prisma --save-dev
```

Tiene sus tipos de datos, que podemos ver en la documentacion oficial, que son (también) muy similares a las otras ORM's.

## Migrate

Convertimos el SCHEMA en codigo de JS, pero tambien genera las tablas dentro de la DB:

Comando para ejecutar la migracion
```
npx prisma migrate dev --name init
```
También nos genera una configuración, pero podeos omitir el "--name init".

Cuando hagamos modificaciones en algunas de las tablas, tenemos que volver a ejecutar la migración.

## PRISMA STUDIO

Podemos generar registros en nuestra DB manualmente con el PRISMA STUDIO

```
npx prisma studio
```

Nos dará una URL que podremos visualizar en el nevegador: http://localhost:5555

