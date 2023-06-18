import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleaños: Date;
    colorfavorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: string;
  
    constructor(
      nombre: string,
      apellidos: string,
      edad: number,
      dni: string,
      cumpleaños: Date,
      colorfavorito: string,
      sexo: string,
      direcciones: Direccion[],
      mails: Mail[],
      telefonos: Telefono[],
      notas: string
    ) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.dni = dni;
      this.cumpleaños = cumpleaños;
      this.colorfavorito = colorfavorito;
      this.sexo = sexo;
      this.direcciones = direcciones;
      this.mails = mails;
      this.telefonos = telefonos;
      this.notas = notas;
    }

    // Método para agregar una nueva dirección
  agregarDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }
  
  // Método para agregar un nuevo mail
  agregarMail(mail: Mail) {
    this.mails.push(mail);
  }
  
  // Método para agregar un nuevo teléfono
  agregarTelefono(telefono: Telefono) {
    this.telefonos.push(telefono);
  }
  
  // Método para modificar los datos de la persona por su DNI
  modificarPersonaPorDNI(dni: string, nuevaDireccion: Direccion, nuevoMail: Mail, nuevoTelefono: Telefono) {
    if (this.dni === dni) {
      this.agregarDireccion(nuevaDireccion);
      this.agregarMail(nuevoMail);
      this.agregarTelefono(nuevoTelefono);
    }
  }
  }
  export { Persona };
  
  