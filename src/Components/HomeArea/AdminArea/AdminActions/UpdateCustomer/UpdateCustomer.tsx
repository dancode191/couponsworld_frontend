import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerModel } from "../../../../../Models/CustomerModel";
import adminService from "../../../../../Services/AdminService";
import notificationService from "../../../../../Services/NotificationService";
import "./UpdateCustomer.css";


function UpdateCustomer(): JSX.Element {

    const {register, handleSubmit, formState} = useForm<CustomerModel>()
    const navigate = useNavigate(); 

    const params = useParams();
    const id = +params.custId!;

    function send(customer: CustomerModel){
        customer.id = id;
        adminService.updateCustomer(customer)
        .then(()=>{
            notificationService.success("customer update successfuly!");
            navigate("/admin/customer/allcustomers");
        })
    }



    return (
        <div className="UpdateCustomer boxGlassLayer1">
			<div className="CustUpdateContainer">
                <h2>Update Customer</h2>
                <form onSubmit={handleSubmit(send)} >
                    <label >Customer First Name:</label><br />
                    <input className="inputDesign" type="text" placeholder="Enter your first name" {...register("firstName",{
                    required: {value: true, message: "you must enter your first name"},
                    }) } /><br />
                    <span className="error">{formState.errors?.firstName?.message}</span><br />

                    <label >Customer Last Name:</label><br />
                    <input className="inputDesign" type="text" placeholder="Enter customer last name" 
                    {...register("lastName",{
                        required: {value: true, message: "you must enter your last name"},
                    })} /><br />
                    <span className="error">{formState.errors?.lastName?.message}</span><br />

                    <label >Customer email:</label><br />
                    <input className="inputDesign" type="text" placeholder="Enter customer email" 
                    {...register("email",{
                        required: {value: true, message: "you must enter your email"},
                        pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email format is not valid"}
                    })} /><br />
                    <span className="error">{formState.errors?.email?.message}</span><br />

                    <label >Customer Password:</label><br />
                    <input className="inputDesign" type="text" placeholder="Enter customer password" 
                    {...register("password",{
                        required: {value: true, message: "you must enter a password"},
                        minLength: {value: 3, message: "password must be at least 3 chars"},
                        maxLength: {value: 15, message: "password must be not more then 15 chars"}
                    })} /><br />
                    <span className="error">{formState.errors?.password?.message}</span><br />

                    <button className="btnDes">Update Customer</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateCustomer;
