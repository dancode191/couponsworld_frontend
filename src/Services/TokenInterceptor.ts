import axios from "axios";
import { CompanyAuthStore } from "../Redux/CompanyAuthState";
import { CustomerAuthStore } from "../Redux/CustomerAuthState";




class Interceptors{
    public createInterceptors(){
        // before request go out, we check if there token, if yes we send it in headers
            axios.interceptors.request.use(request=> {
                if(CompanyAuthStore.getState().token){
                
                    request.headers = {
                        authorization: "Bearer " + CompanyAuthStore.getState().token
                    }
                }
                if(CustomerAuthStore.getState().token){
                    request.headers = {
                        authorization: "Bearer " + CustomerAuthStore.getState().token
                    }
                }
                
                return request;
            })
    }

}


export const interceptors = new Interceptors();