class CredentialModel{
    public email: string;
    public password: string;
    public type: string;

    public constructor(email: string, password: string, type: string){
        this.email = email;
        this.password = password;
        this.type = type;
    }
    
}

export default CredentialModel;