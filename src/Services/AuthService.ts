import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Transform } from "stream";
import { transpileModule } from "typescript";
import CredentialModel from "../Models/CredentialModel";
import { AdminAuthStore, adminLoginAction, adminLogoutAction } from "../Redux/AdminAuthState";
import { CompanyAuthStore, loginAction, logoutAction } from "../Redux/CompanyAuthState";
import { CustomerAuthStore, LoginAction, LogoutAction } from "../Redux/CustomerAuthState";

import appConfig from "../Utils/Config";


class AuthService{
    public async login(credential: CredentialModel){
        const response = axios.post<string>(appConfig.authUrl + "login", credential);
        const token = (await response).data;
        
        if(credential.type == "ADMIN"){
                AdminAuthStore.dispatch(adminLoginAction(token))
        }else if(credential.type == "COMPANY"){
                CompanyAuthStore.dispatch(loginAction(token));
        }else if(credential.type == "CUSTOMER"){
                CustomerAuthStore.dispatch(LoginAction(token));
        }

    }

    public logout(){
        AdminAuthStore.dispatch(adminLogoutAction());
        CompanyAuthStore.dispatch(logoutAction());
        CustomerAuthStore.dispatch(LogoutAction()); 
        
    }
}



const authService = new AuthService();
export default authService;