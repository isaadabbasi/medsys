export class Response{
    public status: Number;
    public message: string;
    constructor(status?: Number, message?:string){
        this.message = message;
        this.status = status;
    }
}