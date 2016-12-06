export class ExternasPeliculasModelo {
    //Esto me genera la clase modelo
    //utilizo el constructor acelerado 
    constructor(
        public id:number,
        public titulo: string,
        public autor: string,
        public sinopsis?: string/*,// detras de primer opcional el resto opcionales
        private otroCampo?: string,*/
    )
    {}
        toString():string{
            // esto lo hago pq voy a poner varias veces Libro.console y directamente me escribe esto
            return "Pelicula Externa: \n\tTitulo:" + this.titulo + "\n\tAutor:" + this.autor + "\n\tSinopsis:\n" + this.sinopsis;
        
    }



}

