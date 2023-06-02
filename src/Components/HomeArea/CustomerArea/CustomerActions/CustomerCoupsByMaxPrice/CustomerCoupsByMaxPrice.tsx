import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CouponModel } from "../../../../../Models/CouponModel";
import customerService from "../../../../../Services/CustomerService";
import notificationService from "../../../../../Services/NotificationService";
import MyCoupons from "../../MyCoupons/MyCoupons";
import "./CustomerCoupsByMaxPrice.css";

function CustomerCoupsByMaxPrice(): JSX.Element {
    const [myCoupons, setmyCoupons] = useState<CouponModel[]>();

    const param = useParams();
    const maxPrice = +param.price!;

    useEffect(()=>{
        customerService.getCustomerCoupsByMaxPrice(maxPrice)
        .then((coups)=>{
            setmyCoupons(coups);
        })
        .catch(err => notificationService.error(err))

    },[maxPrice])

    return (
        <div className="CustomerCoupsByMaxPrice boxGlassLayer1">
			<div className="custCoupsMaxPriceDisplay">
                {myCoupons?.map((c)=> <MyCoupons key={c.id} mycoupons={c}/>)}
            </div>
        </div>
    );
}

export default CustomerCoupsByMaxPrice;
