import { useState } from "react";
import { useForm } from "react-hook-form";
import { CompanyModel } from "../../../Models/CompanyModel";
import companyVerification from "../../../Services/CompanyVerification";
import notificationService from "../../../Services/NotificationService";
import "./companySignUp.css";

function CompanySignUp(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CompanyModel>()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    function send(company: CompanyModel){
        
        companyVerification.verifyCompany(company)
        .then(()=> {
            notificationService.success("verification email sent successfuly");
        })
        .catch(err => notificationService.error(err))
    }

    return (
        <div className="companySignUp boxGlassLayer1">
			<div className="companySignUpScreen boxGlassLayer2">

            <form onSubmit={handleSubmit(send)}>
                <h2 className="joinCompanyTitle">Join us as a new company</h2>
                <label >Company Name:</label><br />
                <input  name="name" type="text" placeholder="Enter company name" 
                {...register("name", {
                    onChange:(e) => setName(e.target.value),
                    required: {value: true, message: "you must enter your company name"},
                })} /><br />
                <span className="error">{formState.errors?.name?.message}</span><br />

                <label >Company email:</label><br />
                <input type="text" placeholder="Enter email" 
                {...register("email",{
                    onChange:(e) => setEmail(e.target.value),
                    required: {value: true, message: "you must enter your email"},
                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email format is not valid"}
                })} /><br />
                <span className="error">{formState.errors?.email?.message}</span><br />

                <label >Company Password:</label><br />
                <input type="text" placeholder="Enter password" 
                {...register("password",{
                    required: {value: true, message: "you must enter a password"},
                    minLength: {value: 3, message: "password must be at least 3 chars"},
                    maxLength: {value: 15, message: "password must be not more then 15 chars"}
                })} /><br />
                <span className="error">{formState.errors?.password?.message}</span><br />
                
                <button className="btnDes">Join as Company</button>
            </form>
            </div>
        </div>
    );
}

export default CompanySignUp;
