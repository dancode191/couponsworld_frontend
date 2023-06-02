import { useEffect, useState } from "react";
import { CouponModel } from "../../../../../Models/CouponModel";
import { companyStore } from "../../../../../Redux/CompanyState";
import companyService from "../../../../../Services/CompanyService";
import notificationService from "../../../../../Services/NotificationService";
import CompanyCouponCard from "../../CompanyCouponCard/CompanyCouponCard";
import "./AllCoupons.css";


function AllCoupons(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    
    useEffect(()=>{
        companyService.getAllCoupons()
        .then(coupon => {
            setCoupons(coupon);
        })
        .catch(err=> notificationService.error(err))

        
    },[coupons])

    return (
        <div className="AllCoupons boxGlassLayer1">
            <div className="couponsDisplay">
            {/* i also pass setCoupons as props so i can trigger a render in this component after deleting a coupon */}
                {coupons?.map((c)=> <CompanyCouponCard setCoupons={setCoupons} key={c.id} coupon={c}/>)}
            </div>

        </div>
    );
}

export default AllCoupons;
