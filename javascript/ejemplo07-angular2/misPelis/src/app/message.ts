export class Message {
    //clase modelo mensage para el chat 
    constructor(
        private user: string,
        private content: string
    ){}
    toString(){
        return this.user + " " + this.content ;
    }
}
