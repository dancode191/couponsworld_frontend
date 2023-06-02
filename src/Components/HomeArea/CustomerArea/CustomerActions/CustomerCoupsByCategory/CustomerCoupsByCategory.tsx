import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CouponModel } from "../../../../../Models/CouponModel";
import customerService from "../../../../../Services/CustomerService";
import notificationService from "../../../../../Services/NotificationService";
import MyCoupons from "../../MyCoupons/MyCoupons";
import "./CustomerCoupsByCategory.css";



function CustomerCoupsByCategory(): JSX.Element {
    const [myCoupons, setMyCoupons] = useState<CouponModel[]>([]);
    const location = useLocation();
    const param = useParams();
    const coupCategory = param.category;

    useEffect(()=>{
        customerService.getCustomerCoupsByCategory(coupCategory)
        .then((coups)=>{
            setMyCoupons(coups);
        })
        .catch(err=> notificationService.error(err))

    },[coupCategory])

    console.log("test path location: " + location.pathname);

    return (
        <div className="CustomerCoupsByCategory boxGlassLayer1">
			<div className="customerCoupsByCatDisplay">
                {
                (myCoupons?.map((c)=> <MyCoupons key={c.id} mycoupons={c} />))
                
                }
            </div>
        </div>
    );
}

export default CustomerCoupsByCategory;
