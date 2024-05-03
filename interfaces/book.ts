interface Book {
  // Completa aquí la definición de la interfaz
  title: string;
  author: string;
  pages: number;
  isbn: string;

}

function printBookInfo(book: Book) {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  console.log(`ISBN: ${book.isbn}`);
}

// Crea aquí el objeto que cumpla con la interfaz Book
const book: Book = {
  // Completa aquí los valores de las propiedades
  title: "Cien años de soeldad",
  author: "Gabriel Garcia Marquez",
  pages: 1000,
  isbn: "123456789"
};

printBookInfo(book);