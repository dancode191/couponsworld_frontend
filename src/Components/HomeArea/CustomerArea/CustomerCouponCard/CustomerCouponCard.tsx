import { useEffect, useState } from "react";
import { CouponModel } from "../../../../Models/CouponModel";
import { customerCouponsFatch, customerCouponsStore } from "../../../../Redux/CustomerCouponsState";
import { couponsFatch, customerStore } from "../../../../Redux/CustomerState";
import customerService from "../../../../Services/CustomerService";
import notificationService from "../../../../Services/NotificationService";
import "./CustomerCouponCard.css";

interface customerCouponProps{
    coupon: CouponModel;
}

function CustomerCouponCard(props: customerCouponProps): JSX.Element {
    

    function PurchaseCoupon(){
        customerService.PurchaseCoupon(props.coupon)
        .then(()=>{
            notificationService.success("coupon purchase successfuly!")
            //those 2 lines for trigger rerender to update coupon list in all coupons and customer coupons
            customerStore.dispatch(couponsFatch([]))
            customerCouponsStore.dispatch(customerCouponsFatch([]));
        })
        .catch(err => notificationService.error(err))
    }

    return (
        <div className="CustomerCouponCard boxGlassLayer2">
            
			<div className="custCoupCardImgBox">
                <img src={props.coupon.image} alt="coupon image" />
            </div>
            <p className="custCoupCardCategory">Category{">"} {props.coupon.category}</p>
            <p className="custCoupCardTitle">{props.coupon.title}</p>
            <p className="custCoupCardDesc">{props.coupon.description}</p>
            <div className="custCoupPricDisc">
                <p className="custCoupCardPrice">Price: $<span className="custCoupCardPriceNum">    {props.coupon.price}</span></p>
                <span className="custCoupCardPriceDiscount">${(props.coupon.price) + Math.floor(props.  coupon.price*(Math.random()*0.3+0.1))}</span>
            </div>
            <p className="custCoupCardPriceAmount">only <span className="custCoupCardPriceAmountNum">{props.coupon.amount}</span> coupons left!</p>
            <p className="custCoupCardPriceSDate custCoupDate">start at: {props.coupon.startDate}</p>
            <p className="custCoupCardPriceEDate custCoupDate">expired at: {props.coupon.endDate}</p>
            <button className="custCouponPurchase btnDes" onClick={PurchaseCoupon}>Purchase Coupon</button>
        </div>

        /*
				
        */
    );
}

export default CustomerCouponCard;
