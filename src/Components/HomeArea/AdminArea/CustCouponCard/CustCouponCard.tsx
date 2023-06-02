import { CouponModel } from "../../../../Models/CouponModel";
import "./CustCouponCard.css";

interface custCoupProps{
    coupon: CouponModel;
}

function CustCouponCard(props: custCoupProps): JSX.Element {


    return (
        <div className="CustCouponCard boxGlassLayer3">
			<div className="cuCCL custoCoupCardLine1">{props.coupon.id}</div>
			<div className="cuCCL custoCoupCardLine2">{props.coupon.title}</div>
			<div className="cuCCL custoCoupCardLine3">{props.coupon.description}</div>
			<div className="cuCCL custoCoupCardLine4">{props.coupon.category}</div>
			<div className="cuCCL custoCoupCardLine5">{props.coupon.company.id}</div> 
			<div className="cuCCL custoCoupCardLine6">{props.coupon.amount}</div>
			<div className="cuCCL custoCoupCardLine7">{props.coupon.price}</div>
			<div className="cuCCL custoCoupCardLine8">{props.coupon.startDate}</div>
			<div className="cuCCL custoCoupCardLine9">{props.coupon.endDate}</div>
        </div>
    );
}

export default CustCouponCard;
