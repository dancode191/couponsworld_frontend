

export class CompanyTokModel{
    public id: number;
    public name: string;
    public email: string;
    public type: string;
    public iat: number;

    public constructor(id: number, name: string, email:string, type: string, iat: number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
        this.iat = iat;
    } 
}

