import { stringify } from "querystring";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyModel } from "../../../../../Models/CompanyModel";
import adminService from "../../../../../Services/AdminService";
import notificationService from "../../../../../Services/NotificationService";
import "./UpdateCompany.css"


function UpdateCompany(): JSX.Element{
    const {register, handleSubmit, formState} = useForm<CompanyModel>();
    const navigate = useNavigate();
    
    //using useParams so i can pass company name and id to the object i send
    //caues we not allowed to change name, and i need id for the update
    const param = useParams();
    const name = param.compName;
    const id = +param.compId!;

    
    function send(company: CompanyModel){
        company.id = id;
        adminService.updateCompany(company)
        .then(()=>{
            notificationService.success("update company succesfuly");
            navigate("/admin/company/allcompanies");
        })
        .catch(err=> notificationService.error(err));
        
    }

    return(
        <div className="UpdateCompanyMain boxGlassLayer1" >
            <div className="compUpdateContainer">
                <h2>Update Company</h2>
                <form onSubmit={handleSubmit(send)}>
                    <label >Company Name:</label><br />
                    <input className="inputDesign" type="text" value={name} disabled={true}
                    {...register("name",{value: name} // will keep company name as defualt, so we cant chang it
                    )} /><br />
                    
                    <label >Company email:</label><br />
                    <input className="inputDesign" type="text" placeholder="Enter company email" 
                    {...register("email",{
                        required: {value: true, message: "you must enter your email"},
                        pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email format is not valid"}
                    })} /><br />
                    <span className="updateCompError">{formState.errors?.email?.message}</span><br />

                    <label >Company Password:</label><br />
                    <input className="inputDesign" type="text" placeholder="Enter company password" 
                    {...register("password",{
                        required: {value: true, message: "you must enter a password"},
                        minLength: {value: 3, message: "password must be at least 3 chars"},
                        maxLength: {value: 15, message: "password must be not more then 15 chars"}
                    })} /><br />
                    <span className="updateCompError">{formState.errors?.password?.message}</span><br />

                    <button className="btnDes">Update Company</button>
                </form>
            </div>
        </div>

    );
}

export default UpdateCompany;