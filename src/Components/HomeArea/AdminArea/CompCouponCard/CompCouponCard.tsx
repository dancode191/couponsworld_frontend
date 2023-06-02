import { CouponModel } from "../../../../Models/CouponModel";
import "./CompCouponCard.css";


interface coupProps{
    coupon: CouponModel;
	
}

function CompCouponCard(props: coupProps): JSX.Element {
	
	
    return (
        <div className="CouponCard boxGlassLayer2">
			<div className="cCCL compCoupCardLine1">{props.coupon.id}</div>
			<div className="cCCL compCoupCardLine2">{props.coupon.title}</div>
			<div className="cCCL compCoupCardLine3">{props.coupon.description}</div>
			<div className="cCCL compCoupCardLine4">{props.coupon.category}</div>
			<div className="cCCL compCoupCardLine5">{props.coupon.company.id}</div> 
			<div className="cCCL compCoupCardLine6">{props.coupon.amount}</div>
			<div className="cCCL compCoupCardLine7">{props.coupon.price}</div>
			<div className="cCCL compCoupCardLine8">{props.coupon.startDate}</div>
			<div className="cCCL compCoupCardLine9">{props.coupon.endDate}</div>
			
        </div>
    );
}

export default CompCouponCard;
