

export class AdminTokModel{
    public name: string;
    public email: string;
    public type: string;
    public iat: number;

    public constructor(name: string, email:string, type: string, iat: number){
        this.name = name;
        this.email = email;
        this.type = type;
        this.iat = iat;
    }
}