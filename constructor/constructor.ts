class Persona {
  nombre:string;
  apellido:string;
  fechaNacimiento:Date;


  //-------- CONSTRUCTOR ---------//
  constructor(nombreParaArrancar){
     this.nombre = nombreParaArrancar;
     }

   //----------------------------//   


  getEdad(){
     const today = new Date();
     const diferenciaEntreFechas = (today - this.fechaDeNacimiento)
     // y todo lo demás para calcular la edad
     }
}



const laura = new Persona("laura");
console.log(laura.nombre);
// laura

/**
 * ! método constructor, que es un tipo especial de método, 
 * ! que se ejecuta automáticamente cuando hacemos un new de una clase.
 * 
 * ! Estos argumentos son los valores iniciales del nuevo objeto que queremos crear.
 * 
 * ! para instanciar un objeto, le pasemos como argumento el valor que le daremos a la propiedad
 * ! podemos determinar ciertos valores mínimos que tienen que tener los objetos
 */