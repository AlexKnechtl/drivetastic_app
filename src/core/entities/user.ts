export class User{
    email: string;
    name: string;
    uid: string;
    constructor(uid: string, email: string, name: string){
        this.email = email
        this.uid = uid;
        this.name = name;
    }
}