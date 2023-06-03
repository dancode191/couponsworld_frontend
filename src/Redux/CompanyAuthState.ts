import { createStore } from "redux";
import jwtDecode from "jwt-decode";
import { CompanyTokModel } from "../Models/CompanyTokModel";
import notificationService from "../Services/NotificationService";



// this state(global state) will be used for company
export class AuthState{
    public token:string = null;
    public user:CompanyTokModel = null;

    //we will check if we have token stored at local storage, if yes we put him in global 
    //state token and user
    constructor(){
        const storedToken = localStorage.getItem("token");
        
        //add try/catch in case token in local storage will be change by manually by someone
        if(storedToken){
            try{
                this.user = jwtDecode(storedToken);
                this.token = storedToken;
      
            }catch(err: any){
                notificationService.error("erorr decoding token!");
            }
            
        }
        
    }

}

export enum AuthActionType{
    Login,
    Logout
}

export interface AuthAction{
    type: AuthActionType, payload?: any;
}

export function loginAction(token: string){
    return{type: AuthActionType.Login, payload: token}
}
export function logoutAction(){
    return{type: AuthActionType.Logout}
}


export function authReducer(currentState: AuthState = new AuthState, action: AuthAction){

    const newState = {...currentState}

    switch(action.type){
        //payload is the token
        case AuthActionType.Login:
            //we save the token in global store
            newState.token = action.payload;

            //we save the toekn in localstorage, so even after refresh we wont need to login again
            localStorage.setItem("token", newState.token);
            
            //we save the decoded token in user in our global state
            
            newState.user = jwtDecode(newState.token);

            break;

        case AuthActionType.Logout:
            //we delete the token info when we logout from our global state and local storage
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;

    }

    return newState;
}

export const CompanyAuthStore = createStore(authReducer);
