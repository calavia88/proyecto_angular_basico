export class RegisterDto {
    email : string; 
    password : string;
    username: string;
    code: string;

    constructor()
    {
        this.email = '';
        this.password = '';
        this.code = '';
        this.username = '';
    }
        
}

