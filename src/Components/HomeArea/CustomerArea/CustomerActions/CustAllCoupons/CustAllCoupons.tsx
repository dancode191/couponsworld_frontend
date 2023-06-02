import { useEffect, useState } from "react";
import { CouponModel } from "../../../../../Models/CouponModel";
import customerService from "../../../../../Services/CustomerService";
import notificationService from "../../../../../Services/NotificationService";
import CustomerCouponCard from "../../CustomerCouponCard/CustomerCouponCard";
import "./CustAllCoupons.css";

function CustAllCoupons(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    
    useEffect(()=>{
        customerService.getAllCoupons()
        .then((coups)=>{
            setCoupons(coups);
            
        })
        .catch(err => notificationService.error(err))
    },[coupons])


    return (
        <div className="custAllCoupons boxGlassLayer1">

			<div className="custCouponsDisplay">
                {coupons?.map((c)=> <CustomerCouponCard  key={(c.id)} coupon={c}/>)}
            </div>
        </div>
    );
}

export default CustAllCoupons;
