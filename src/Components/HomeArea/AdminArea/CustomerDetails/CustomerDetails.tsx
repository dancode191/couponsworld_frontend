import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CouponModel } from "../../../../Models/CouponModel";
import { CustomerModel } from "../../../../Models/CustomerModel";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import CustCouponCard from "../CustCouponCard/CustCouponCard";
import "./CustomerDetails.css";

function CustomerDetails(): JSX.Element {
    const [customer, setCustomer] = useState<CustomerModel>();
    const [coupons, setCoupons] = useState<CouponModel[]>([]);

    

    const param = useParams();
    const id = +param.custId!;

    useEffect(()=>{
        adminService.getOneCustomer(id)
        .then((c)=> {
            setCustomer(c);
        })
        .catch(err=> notificationService.error(err));

        adminService.getAllCustomerCouponsById(id)
        .then((c)=>{
            setCoupons(c);
        })
        .catch(err=> notificationService.error(err))
    },[])

    return (
        <div className="CustomerDetails boxGlassLayer1">
			{customer && <>
                <div className="cust-container">
                    <div className="cust-details boxGlassLayer2">
                        <h3>{customer.firstName + " " + customer.lastName}</h3>
                            <div className="cust-info">
                                <p>Customer ID: {customer.id}</p>
                                <p>Email: {customer.email}</p>
                                <p>Password: {customer.password}</p>
                                <p >Coupons: <span style={{color: coupons.length ? 'green' : 'red'}}>{coupons.length}</span></p>
                                <NavLink className="custBackBtn backBtn" to={"/admin/customer/allcustomers"}>Back</NavLink>
                            </div>
                    </div>
                    <div className="cust-coupons boxGlassLayer1">
                        <div className="custCoupons-info">
                            <p className="custC1">id</p>
                            <p className="custC2 custCoup">title</p>
                            <p className="custC3 custCoup">description</p>
                            <p className="custC4 custCoup">category</p>
                            <p className="custC5 custCoup">companyID</p>
                            <p className="custC6 custCoup">amount</p>
                            <p className="custC7 custCoup">price</p>
                            <p className="custC8 custCoup">startDate</p>
                            <p className="custC9 custCoup">endDate</p>
                        </div>
                        <div className="custCoup-display">
                            {coupons?.map((c)=> <CustCouponCard key={c.id} coupon={c}  />)}

                        </div>

                    </div>
                </div>
            </>}
        </div>
    );
}

export default CustomerDetails;
