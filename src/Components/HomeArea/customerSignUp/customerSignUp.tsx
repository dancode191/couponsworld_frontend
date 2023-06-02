import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomerModel } from "../../../Models/CustomerModel";
import customerService from "../../../Services/CustomerService";
import customerVerification from '../../../Services/CustomerVerification';
import notificationService from "../../../Services/NotificationService";
// import sendEmailRequest from '../../../Services/SendEmail';
import "./customerSignUp.css";

function CustomerSignUp(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CustomerModel>();
    let [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    

    function send(customer: CustomerModel){
        
        // get tmp token code for email verification:
        customerVerification.verifyCustomer(customer)
        .then(()=> {
            notificationService.success("verification email sent successfuly");
        })
        .catch(err => notificationService.error(err))
        

    }

    return (
        <div className="customerSignUp boxGlassLayer1">
			<div className="customerSignUpScreen boxGlassLayer2">

            <form onSubmit={handleSubmit(send)}>
                <h2 className="joinCsutomerTitle">Join us as a new customer</h2>
                <label >Customer First Name:</label><br />
                <input  name="firstName" type="text" placeholder="Enter first name" 
                {...register("firstName", {
                    onChange:(e) => setFirstName(e.target.value),
                    required: {value: true, message: "you must enter your first name"},
                })} /><br />
                <span className="error">{formState.errors?.firstName?.message}</span><br />

                <label >Customer Last Name:</label><br />
                <input type="text" placeholder="Enter last name" 
                {...register("lastName",{
                    required: {value: true, message: "you must enter your last name"},
                })} /><br />
                <span className="error">{formState.errors?.lastName?.message}</span><br />

                <label >Customer email:</label><br />
                <input type="text" placeholder="Enter email" 
                {...register("email",{
                    onChange:(e) => setEmail(e.target.value),
                    required: {value: true, message: "you must enter your email"},
                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email format is not valid"}
                })} /><br />
                <span className="error">{formState.errors?.email?.message}</span><br />

                <label >Customer Password:</label><br />
                <input type="text" placeholder="Enter password" 
                {...register("password",{
                    required: {value: true, message: "you must enter a password"},
                    minLength: {value: 3, message: "password must be at least 3 chars"},
                    maxLength: {value: 15, message: "password must be not more then 15 chars"}
                })} /><br />
                <span className="error">{formState.errors?.password?.message}</span><br />
                
                <button className="btnDes">Join as Customer</button>
            </form>
            </div>
        </div>
    );
}

export default CustomerSignUp;
