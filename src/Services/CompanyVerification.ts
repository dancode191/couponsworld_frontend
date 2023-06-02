import axios from "axios";
import { CompanyModel } from "../Models/CompanyModel";
import appConfig from "../Utils/Config";



class CompanyVerification{
    public async verifyCompany(company: CompanyModel){
        await axios.post<string>(appConfig.companyUrl + "verify", company);
        
    }

    // add the company to DB after verify his email
    public async companySignUp(token: String){
        await axios.post<CompanyModel>(appConfig.companyUrl + "signUp/"+token)

    }
}

const companyVerification = new CompanyVerification();
export default companyVerification;