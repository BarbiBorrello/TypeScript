class Banda {
  members: string[];
  albums: object[];


  constructor(members: string[], albums: object[]) {
     this.members = members;
     this.albums = albums;
  }
}

//--------------------------------------------------------------------//

class Album {
  title: string;
  songs: string[];
}
class Banda2 {
  members: string[];
  albums: object[];


  constructor(members: string[], albums: Album[]) {
     this.members = members;
     this.albums = albums;
  }
}

/**
 * ! en el constructor de la clase BANDA 
 * ? esta la clase ALBUM = albums: Album[]
 */