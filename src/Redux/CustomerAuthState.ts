import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import { CustomerModel } from "../Models/CustomerModel";
import { CustomerTokModel } from "../Models/CustomerTokModel";
import notificationService from "../Services/NotificationService";



export class AuthState{
    public token:string = null;
    public user:CustomerTokModel = null

    constructor(){
        const storedToken = localStorage.getItem("token");
        if(storedToken){
            try{
                this.user = jwtDecode(storedToken);
                this.token = storedToken;
                console.log("checking token input: " + this.token);
                console.log("checking user input: " + this.user);
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

export function LoginAction(token: string){
    return{type:AuthActionType.Login, payload: token}
}
export function LogoutAction(){
    return{type:AuthActionType.Logout}
}

export function AuthReducer(currentState: AuthState = new AuthState, action: AuthAction){
    const newState = {...currentState}

    switch(action.type){

        case AuthActionType.Login:
            newState.token = action.payload;

            localStorage.setItem("token", newState.token);

            
            newState.user = jwtDecode(newState.token);

            break;

        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;
            
    }
    return newState;
}

export const CustomerAuthStore = createStore(AuthReducer);