export class Pelicula {


    //Esto me genera la clase modelo
    //utilizo el constructor acelerado 
    constructor(
        public titulo: string,
        private autor: string,
        private sinopsis?: string/*,// detras de primer opcional el resto opcionales
        private otroCampo?: string,*/
    )
    {}
        toString():string{
            // esto lo hago pq voy a poner varias veces Libro.console y directamente me escribe esto
            return "Libro: \n\tTitulo:" + this.titulo + "\n\tAutor:" + this.autor + "\n\tSinopsis:\n" + this.sinopsis;
        
    }



}
