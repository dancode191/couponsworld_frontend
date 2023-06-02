import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CouponModel } from "../../../../../Models/CouponModel";
import companyService from "../../../../../Services/CompanyService";
import notificationService from "../../../../../Services/NotificationService";
import CompanyCouponCard from "../../CompanyCouponCard/CompanyCouponCard";
import "./CompCoupsByCategory.css";



function CompCoupsByCategory(): JSX.Element {

    const [filteredCoupons , setfilteredCoupons] = useState<CouponModel[]>([]);

    const param = useParams();
    const filterCategory = param.category!;
    
    
    useEffect(()=>{
        companyService.getAllCoupons()
        .then((coups)=> {
            setfilteredCoupons(coups.filter(c=>{
                return c.category === filterCategory;
            }))
        })
        .catch(err=> notificationService.error(err))
    },[filterCategory])



    return (
        <div className="CompCoupsByCategory boxGlassLayer1">
			<div className="CompCoupsCateDisplay">

            {filteredCoupons?.map((c)=> <CompanyCouponCard  key={c.id} coupon={c}/>)}
            
            </div>
        </div>
    );
}

export default CompCoupsByCategory;
