import { useNavigate, useParams } from "react-router-dom";
import customerVerification from "../../../Services/CustomerVerification";
import notificationService from "../../../Services/NotificationService";
import "./VerifyCustomerEmail.css";

// when customer click on active account he will be add to the DB

function VerifyCustomerEmail(): JSX.Element {
    const navigate = useNavigate();


    const  param  = useParams();
    const token = param.emailCode;

    function verifyEmail(){

        customerVerification.customerSignUp(token)
        .then(()=>{

            notificationService.success("your email was verify successfuly, your account is active.")
            navigate("/login");
        })
        .catch((err)=> notificationService.error(err))
    }

    return (
        <div className="VerifyCustomerEmail boxGlassLayer1">
			<p className="title">Click the button to complete email verification</p>
            <button onClick={verifyEmail} className="verifyEmailBtn">Active Account</button>
        </div>
    );
}

export default VerifyCustomerEmail;
