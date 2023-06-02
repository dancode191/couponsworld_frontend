import { useEffect, useState } from "react";
import { CouponModel } from "../../../../../Models/CouponModel";
import customerService from "../../../../../Services/CustomerService";
import notificationService from "../../../../../Services/NotificationService";
import MyCoupons from "../../MyCoupons/MyCoupons";
import "./AllCustomerCoupons.css";

function AllCustomerCoupons(): JSX.Element {

    const [myCoupons, setMycoupons] = useState<CouponModel[]>([]);

    useEffect(()=>{
        customerService.getAllCustomerCoupons()
        .then((coups)=>{
            setMycoupons(coups);
        })
        .catch(err => notificationService.error(err))
    },[myCoupons])

  
    return (
        <div className="AllCustomerCoupons boxGlassLayer1">
			<div className="AllCustomerCouponsDisplay">
                {myCoupons?.map((c)=><MyCoupons setMycoupons={setMycoupons} key={c.id} mycoupons={c}/>)}
            </div>
        </div>
    );
}

export default AllCustomerCoupons;
