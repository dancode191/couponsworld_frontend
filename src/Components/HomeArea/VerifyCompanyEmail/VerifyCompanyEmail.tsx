import { useNavigate, useParams } from "react-router-dom";
import companyService from "../../../Services/CompanyService";
import companyVerification from "../../../Services/CompanyVerification";
import notificationService from "../../../Services/NotificationService";
import "./VerifyCompanyEmail.css";


function VerifyCompanyEmail(): JSX.Element {
    const navigate = useNavigate();
    const param = useParams();
    const token = param.emailCode;
    
    function verifyEmail(){
        
        companyVerification.companySignUp(token)
        .then(()=>{

            notificationService.success("your email was verify successfuly, your account is active.")
            navigate("/login");
        })
        .catch((err)=> notificationService.error(err))
    }

    return (
        <div className="VerifyCompanyEmail boxGlassLayer1">
			<p className="title">Click the button to complete email verification</p>
            <button onClick={verifyEmail} className="verifyEmailBtn">Active Account</button>
            
        </div>
    );
}

export default VerifyCompanyEmail;
