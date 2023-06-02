

export class CustomerTokModel{
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public type: string;
    public iat: number;

    public constructor(id: number, firstName: string, lastName: string, email:string, type: string, iat: number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.iat = iat;
    }

}