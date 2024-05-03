// ejemplo.ts

function suma(a: number, b: number) {
  return a + b;
}

const resultado = suma(2, 3);
console.log(resultado);

/**
 * ! llamado en terminal:
 * ? tsc ejemplo.ts
 * * genera: ejemplo.js
 * ! llamado en terminal:
 * ? node ejemplo.js
 * * genera resultado : 5
 */