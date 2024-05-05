class Peli {
  title: string;
  rating: number;

  getPeli(){
    return this;
  }
}

function main (){
// instancias
const peli = new Peli();
peli.title = "Una peli";
peli.rating = 5;

const peli2 = new Peli();
peli2.title = "Otra peli";
peli2.rating = 1;

console.log(peli.getPeli());
console.log(peli2.getPeli());



}

main()