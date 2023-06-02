import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CompanyModel } from "../../../../../Models/CompanyModel";
import adminService from "../../../../../Services/AdminService";
import notificationService from "../../../../../Services/NotificationService";
import "./AddCompany.css"


function AddCompany(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CompanyModel>();
    const navigate = useNavigate();

    function send(company: CompanyModel){
        adminService.addCompany(company)
        .then(()=>{
            notificationService.success("add company succesfuly");
            navigate("/admin/company/allcompanies");
        })
        .catch(err=> notificationService.error(err));
    }


    return(
        <div className="AddCompany boxGlassLayer1">
            <h2>Add Company</h2>
            <form onSubmit={handleSubmit(send)}>
                <label >Company Name:</label><br />
                <input className="inputDesign" type="text" placeholder="Enter company name" 
                {...register("name",{
                    required: {value: true, message: "you must enter company name"},
                })} /><br />
                <span className="addCompError">{formState.errors?.name?.message}</span><br />

                <label >Company email:</label><br />
                <input className="inputDesign" type="text" placeholder="Enter company email" 
                {...register("email",{
                    required: {value: true, message: "you must enter your email"},
                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email format is not valid"}
                })} /><br />
                <span className="addCompError">{formState.errors?.email?.message}</span><br />

                <label >Company Password:</label><br />
                <input className="inputDesign" type="text" placeholder="Enter company password" 
                {...register("password",{
                    required: {value: true, message: "you must enter a password"},
                    minLength: {value: 3, message: "password must be at least 3 chars"},
                    maxLength: {value: 15, message: "password must be not more then 15 chars"}
                })} /><br />
                <span className="addCompError">{formState.errors?.password?.message}</span><br />

                <button className="btnDes">Add Company</button>

            </form>
        </div>

    );
}

export default AddCompany;

