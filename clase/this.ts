class Persona {
  nombre: string;
  fechaNacimiento: string;

  constructor(nombre: string, fechaNacimiento: string) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
  }
}

// Crear dos objetos de la clase Persona
const persona1 = new Persona("Juan", "1990-05-15");
const persona2 = new Persona("María", "1985-08-20");

// Llamar al método mostrarInfo para cada objeto
console.log("Persona 1:");
persona1.mostrarInfo();
console.log("Persona 2:");
persona2.mostrarInfo();
