import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import { AdminTokModel } from "../Models/AdminTokModel";
import notificationService from "../Services/NotificationService";


export class AuthState{
    public token:string = null;
    public user:AdminTokModel = null ;
    
    constructor(){
        const storedToken = localStorage.getItem("token");
        
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

export function adminLoginAction(token: string){
    return{type: AuthActionType.Login, payload: token}
}
export function adminLogoutAction(){
    return{type: AuthActionType.Logout}
}

export function adminAuthReducer(currentState: AuthState = new AuthState, action: AuthAction){

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

export const AdminAuthStore = createStore(adminAuthReducer);