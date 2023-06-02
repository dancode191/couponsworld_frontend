import { Notyf } from "notyf";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBarArea/NavBar/NavBar";
import authService from "./AuthService";


class NotificationService{
    
    private notify = new Notyf({duration: 2000, position: {y: "top", x: "center"}})

    public success(msg: string){
        this.notify.success(msg);
    }
    public error(err: any){
        const msg = this.errorHandler(err)
        this.notify.error(msg);
        // this delete the token if user was not active more then 30min.
        if(msg === "session not found!"){
            localStorage.removeItem("token");
        }
    }

    private errorHandler(err: any){
        if(typeof err == "string")
            return err;
        
        if(typeof err.response?.data === "string")
            return err.response?.data;

        if(Array.isArray(err.response?.data))
            return err.response.data[0] // to return the first string only

        if(typeof err.message === "string")
            return err.message;

        return "opps someting strange is going on !!";
    }

}

const notificationService = new NotificationService
export default notificationService;
