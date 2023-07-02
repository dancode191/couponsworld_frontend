import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialModel from "../../../Models/CredentialModel";
import authService from "../../../Services/AuthService";
import notificationService from "../../../Services/NotificationService";
import "./Login.css";

function Login(): JSX.Element {

    const {register, handleSubmit, formState} = useForm<CredentialModel>();
    //i add those 2 state so i can know if fields are done and change the button state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    function send(cred: CredentialModel){
        authService.login(cred)
        .then(()=>{
            notificationService.success("log in successful");
            if(cred.type == "ADMIN"){
                navigate("/admin");
            }else if(cred.type == "COMPANY"){
                navigate("/company/all");
            }else if(cred.type == "CUSTOMER"){
                navigate("/customer/all");
            }

        })
        .catch(err=> notificationService.error(err));
        
        
    }


    return (
        <div className="Login boxGlassLayer1">
            <div className="welcomeScreen">
                <h2 className="loginWelcomeTitle">Welcome To Coupons World</h2>
                <p className="loginWelcomeparg">buy and sell coupons from all categories and prices</p>
                <p className="loginInstructions">
                        <span>Login info:</span> <br />
                        You can sign-up for new account or log-in:<br />
                        As customer: <br />
                        customer1@gmail.com <br />
                        As company: <br />
                        company1@gmail.com <br />
                        Password for both: 1234 
                    </p>
            </div>
            <div className="loginScreen boxGlassLayer2">
			    <h2>Login</h2>
                <p className="loginNote">*First login might take ~3 min due to DB hosting sleep time</p>
                <form className="loginForm" onSubmit={handleSubmit(send)}>
                    <label >Email</label><br />
                    <input className="emailInput" type="text" value={email} placeholder="Enter your email" {...register("email",{
                        required: {value: true, message: "you must enter your email"},
                        // this pattern is for making sure the email format is valid
                        pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email format is not valid"}
                    })} onChange={(e) => setEmail(e.target.value)}/><br />
                    <span className="error">{formState.errors?.email?.message}</span><br />

                    <label >Password</label><br />
                    <input className="passInput" type="password" value={password} placeholder="Enter your password" {...register("password",{
                        required: {value: true, message: "you must enter a password"},
                        minLength: {value: 3, message: "password must be at least 3 chars"},
                        maxLength: {value: 15, message: "password must be not more then 15 chars"}
                    })} onChange={(e) => setPassword(e.target.value)}/><br />
                    <span className="error">{formState.errors?.password?.message}</span><br />

                    <label >Login as:  </label>
                    <select className="loginInput" id="type" {...register("type",{
                        required: {value: true, message: "you must select type of user"}
                    })}>
                        <option value="ADMIN">ADMIN</option>
                        <option value="COMPANY">COMPANY</option>
                        <option value="CUSTOMER">CUSTOMER</option>
                    </select><br />
            
                    <button className="btnDes" >Login</button>
                    
                </form>
            </div>
        </div>
    );
}

export default Login;
