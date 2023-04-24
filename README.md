# Práctica API sencilla para Blog

Vamos a practicar la construcción de una API para realizar el crud de comentatios en entradas de blog y listar los post.

## Tareas:

1. Crear una base de datos que soporte el registro de post en un blog y sus comentarios.

   - Un post tiene un id, nombre, contenido y puede tener uno o muchos comentarios.
   - No necesita crear un estructura compleja para está base de datos, con 2 tablas está bien.

2. Crear un proyecto de de node.js que se conecte a la base de datos por medio de prisma y exponga los siguientes endpoints:

   - GET: /post => retorna una lista de los post y sus comentarios
   - POST: /comment => permite a creación de un comentario en la base de datos
   - GET: /comment => retorna una lista de los comentarios
   - GET: /comment/:id => retorna un comentario por id
   - PUT: /comment/:id => permite la actualización de un comentario por id
     DELETE: /comment/:id => elimina un ccomentario por id

3. Subir la base de datos y el servicio de api a un servidor en internet, puede ser railway.

## Entergable:

- Link del repositorio
- Link del dominio de la API desplegada
- Video donde se muestre el funcionamiento de los endpoints a traves de un cliente REST
