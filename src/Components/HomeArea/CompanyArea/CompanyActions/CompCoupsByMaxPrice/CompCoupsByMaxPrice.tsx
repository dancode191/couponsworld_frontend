import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CouponModel } from "../../../../../Models/CouponModel";
import companyService from "../../../../../Services/CompanyService";
import CompanyCouponCard from "../../CompanyCouponCard/CompanyCouponCard";
import "./CompCoupsByMaxPrice.css";

function CompCoupsByMaxPrice(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>();

    const param = useParams();
    const maxPrice = +param.price!;

    useEffect(()=>{
        companyService.getAllCouponsByMaxPrice(maxPrice)
        .then((coups)=>{
            setCoupons(coups);
        })
    },[maxPrice])
    
    return (
        <div className="CompCoupsByMaxPrice boxGlassLayer1">
			<div className="compCoupsMaxPriceDisplay">
            {coupons?.map((c)=> <CompanyCouponCard setCoupons={setCoupons} key={c.id} coupon={c}/>)}
            </div>
        </div>
    );
}

export default CompCoupsByMaxPrice;
