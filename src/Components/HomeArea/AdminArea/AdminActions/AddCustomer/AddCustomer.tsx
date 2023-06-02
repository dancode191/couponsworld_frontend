import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomerModel } from "../../../../../Models/CustomerModel";
import adminService from "../../../../../Services/AdminService";
import notificationService from "../../../../../Services/NotificationService";
import "./AddCustomer.css";


function AddCustomer(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CustomerModel>();
    const navigate = useNavigate();

    function send(customer: CustomerModel){
        adminService.addCustomer(customer)
        .then(()=>{
            notificationService.success("custoemr add successfuly");
            navigate("/admin/customer/allcustomers"); 
        })
        .catch(err=> notificationService.error(err))
    }

    return (
        <div className="AddCustomer boxGlassLayer1">
            <h2 className="addCustTitle">Add Customer</h2>
			<form onSubmit={handleSubmit(send)}>
                <label >Customer First Name:</label><br />
                <input type="text" placeholder="Enter first name" 
                {...register("firstName",{
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

                <button className="AddCustbtnDes">Add Customer</button>
            </form>
        </div>
    );
}

export default AddCustomer;
