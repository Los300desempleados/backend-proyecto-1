# backend-proyecto-1

## Descripción

Backend API de un sistema de un cine

# PSeudo requerimientos

- Existen 3 roles en el sistema

  - Administradores
  - Empleados
  - Clientes

- Para poder registrar a un usuario en el sistema, se deberán ingresar los siguientes datos:

  - No de identificación DNI
  - Nombres*
  - APellidos*
  - Fecha de nacimiento*
  - Rol (admin, empleado, cliente)*
  - Teléfono*
  - Correo*
  - Contraseña*
  - Alias*

- Solo el administrador puede registrar a más empleados
- Los clientes se pueden registrar sin cuenta previa
- Los empleados pueden darse de baja
- Para que una persona pueda usar nuestro sistema debe tener una cuenta de cliente previamente registrada
- Los registros de los usuarios no se eliminarán solo quedarán desactivados y no se mostrarán en los resultados de las búsquedas
- El administrador y el empleado pueden registrar películas en el sistema, de las cuales necesitaremos los siguientes datos:

  - Título
  - Director
  - Productor
  - Fecha de estreno
  - Género
  - Dureación
  - Cast
  - Sinópsis
  - Calificación
  - Portada (url o link de la portada)

- Los empleados y adminsitradores pueden agendar y editar funciones, los datos necesarios para una función son

  - Hora y fecha
  - Idioma
  - Subtítulos
  - Sala
  - Película
  - Precio

- Los empleados y admins también pueden registrar salas de cine las cuales pueden llevar los siguientes datos:

  - Dirección Address
  - Asientos
  - Nombre

- Los clientes pueden editar sus datos pero, para cambiar sus contraseña y correo, se hace un proceso aparte
- Para cambiar contraseña y/o correo se necesita la contraseña anterior y la nueva contraseña a ser guardada

- Los datos sensibles de los clientes deben ser encriptados
- El cliente puede consultar las películas que se van a proyectar en cierta sala
- Los clientes pueden comprar un boleto para un asiento
- Los clientes pueden ver su historial de compras
- Los clientes pueden buscar películas aunque no se vayan a proyectar
- Los clientes pueden dejar un comentario en las películas
- Para ver los comentarios de las películas, el cliente debe ver los datos de una película en específico
- Los clientes tienen un descuento del 20% el día de su cumpleaños

- Modelos propuestos:

  - Users
  - Películas
  - Funciones
  - Salas
  - Ventas
  - Comentarios

- Branch name
  `[feat o fix]/[INICIALES EN MAYUS]-[NÚMERO DE TAREA]/[nombre-de-la-tarea]`