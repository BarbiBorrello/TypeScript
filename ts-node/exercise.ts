interface Person {
  name: string;
  age: number;
  email: string;
}

function printPersonInfo(person: Person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Email: ${person.email}`);
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
};

printPersonInfo(person);

/**
 * ! llamaodo desde la terminal: 
 * ?  ts-node exercise.ts
 * * Esto compilará el archivo TypeScript y lo ejecutará directamente en Node.js, 
 * * sin necesidad de compilarlo por separado.
 */