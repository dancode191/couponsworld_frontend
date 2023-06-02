import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CustomerModel } from "../../../../../Models/CustomerModel";
import { customerCouponsStore } from "../../../../../Redux/CustomerCouponsState";
import customerService from "../../../../../Services/CustomerService";
import notificationService from "../../../../../Services/NotificationService";
import "./MyCustomerDetails.css";

function MyCustomerDetails(): JSX.Element {
    const [customer, setCustomer] = useState<CustomerModel>();

    let numOfCouponsBought = customerCouponsStore.getState().coupons.length;

    useEffect(()=>{
        customerService.getCustomerDetails()
        .then((cDetails)=>{
            setCustomer(cDetails);
        })
        .catch(err => notificationService.error(err))
    },[])



    return (
        <div className="MyCustomerDetails boxGlassLayer1">
			{customer && <>
                
                    <h2>{customer.firstName + " " + customer.lastName}</h2>
                    <p className="custDetailsLine"><span> Your Account ID: </span> {customer.id}</p>
                    <p className="custDetailsLine"><span> Email: </span> {customer.email}</p>
                    <p className="custDetailsLine"><span> Password: </span> {customer.password}</p>
                    <p className="custCoupcountContainer">you bought <span className="customerCoupondCount">{numOfCouponsBought}</span> coupons !</p>
                    <NavLink className="custInfoBackBtn backBtn" to={"/customer/all"}>Back</NavLink>

            </>}
        </div>
    );
}

export default MyCustomerDetails;
