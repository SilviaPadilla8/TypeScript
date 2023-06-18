import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

// Crear registros de personas
const direccion1 = new Direccion('Calle Principal', '123', '1', 'A', '28001', 'Madrid', 'Madrid');
const mail1 = new Mail('Personal', 'ejemplo1@example.com');
const telefono1 = new Telefono('Móvil', '123456789');
const persona1 = new Persona('Juan', 'Gómez', 30, '12345678A', new Date(1993, 5, 15), 'Azul', 'Masculino', [direccion1], [mail1], [telefono1], 'Notas adicionales');

const direccion2 = new Direccion('Calle Secundaria', '456', '2', 'B', '28002', 'Madrid', 'Madrid');
const mail2 = new Mail('Trabajo', 'ejemplo2@example.com');
const telefono2 = new Telefono('Trabajo', '987654321');
const persona2 = new Persona('María', 'López', 28, '87654321B', new Date(1995, 9, 8), 'Rojo', 'Femenino', [direccion2], [mail2], [telefono2], '');

const direccion3 = new Direccion('Avenida Principal', '789', '3', 'C', '28003', 'Madrid', 'Madrid');
const mail3 = new Mail('Personal', 'ejemplo3@example.com');
const telefono3 = new Telefono('Móvil', '456789123');
const persona3 = new Persona('Pedro', 'Rodríguez', 35, '56789012C', new Date(1988, 2, 20), 'Verde', 'Masculino', [direccion3], [mail3], [telefono3], 'Sin notas');

// Mostrar los registros en el terminal
console.log('Persona 1:');
console.log('Nombre:', persona1.nombre);
console.log('Apellidos:', persona1.apellidos);
console.log('Edad:', persona1.edad);
console.log('DNI:', persona1.dni);
console.log('Cumpleaños:', persona1.cumpleaños.toDateString());
console.log('Color favorito:', persona1.colorfavorito);
console.log('Sexo:', persona1.sexo);
console.log('Direcciones:', persona1.direcciones);
console.log('Mails:', persona1.mails);
console.log('Teléfonos:', persona1.telefonos);
console.log('Notas:', persona1.notas);
console.log('-------------------');

console.log('Persona 2:');
console.log('Nombre:', persona2.nombre);
console.log('Apellidos:', persona2.apellidos);
console.log('Edad:', persona2.edad);
console.log('DNI:', persona2.dni);
console.log('Cumpleaños:', persona2.cumpleaños.toDateString());
console.log('Color favorito:', persona2.colorfavorito);
console.log('Sexo:', persona2.sexo);
console.log('Direcciones:', persona2.direcciones);
console.log('Mails:', persona2.mails);
console.log('Teléfonos:', persona2.telefonos);
console.log('Notas:', persona2.notas);
console.log('-------------------');

console.log('Persona 3:');
console.log('Nombre:', persona3.nombre);
console.log('Apellidos:', persona3.apellidos);
console.log('Edad:', persona3.edad);
console.log('DNI:', persona3.dni);
console.log('Cumpleaños:', persona3.cumpleaños.toDateString());
console.log('Color favorito:', persona3.colorfavorito);
console.log('Sexo:', persona3.sexo);
console.log('Direcciones:', persona3.direcciones);
console.log('Mails:', persona3.mails);
console.log('Teléfonos:', persona3.telefonos);
console.log('Notas:', persona3.notas);
console.log('-------------------');


// Buscar y modificar persona por DNI
const dniABuscar = '12345678A';
const nuevaDireccion = new Direccion('Nueva Calle', '999', '4', 'D', '28004', 'Madrid', 'Madrid');
const nuevoMail = new Mail('Trabajo', 'nuevoejemplo@example.com');
const nuevoTelefono = new Telefono('Casa', '9876543210');

persona1.modificarPersonaPorDNI(dniABuscar, nuevaDireccion, nuevoMail, nuevoTelefono);

// Mostrar el registro de persona modificado
console.log('Persona 1 (modificada):');
console.log('Nombre:', persona1.nombre);
console.log('Apellidos:', persona1.apellidos);
console.log('Edad:', persona1.edad);
console.log('DNI:', persona1.dni);
console.log('Cumpleaños:', persona1.cumpleaños.toDateString());
console.log('Color favorito:', persona1.colorfavorito);
console.log('Sexo:', persona1.sexo);
console.log('Direcciones:', persona1.direcciones);
console.log('Mails:', persona1.mails);
console.log('Teléfonos:', persona1.telefonos);
console.log('Notas:', persona1.notas);
console.log('-------------------');
