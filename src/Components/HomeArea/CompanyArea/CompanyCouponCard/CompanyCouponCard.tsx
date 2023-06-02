import { NavLink } from "react-router-dom";
import { CouponModel } from "../../../../Models/CouponModel";
import edit from "../images/edit.svg"
import trash from "../images/trashCan.svg"
import companyService from "../../../../Services/CompanyService";
import notificationService from "../../../../Services/NotificationService";
import "./CompanyCouponCard.css";


interface companyCouponsProps{
    coupon: CouponModel;
	setCoupons?: any;
}

function CompanyCouponCard(props: companyCouponsProps): JSX.Element {

	function deleteCoupon(){
		
		companyService.deleteCoupon(props.coupon.id)
		.then(()=>{
			notificationService.success("coupon deleted successfuly!");
			props.setCoupons([]);
		})
		.catch(err=> notificationService.error(err))
	}


    return (
		
        <div className="CompanyCouponCard boxGlassLayer2">
				<div className="compCoupCardImgBox">
					<img  src={props.coupon.image} alt="coupon image" />
				</div>
				<div className="compCoupCardIdCat">
					<div className="compCoupCardCat">Category {">"} {props.coupon.category}</div>
					<div className="compCoupCardID">ProdID: {props.coupon.id}</div>
				</div>
				
				<div className="compCoupCardSettings">
					<NavLink className="UpdateCoupon" to={"/company/update/"+props.coupon.id}><img className="compCardBtn" src={edit} /></NavLink>
					<div className="compCoupCardTitle">{props.coupon.title}</div>
					<NavLink className="DeleteCoupon" to={""} onClick={deleteCoupon}><img className="compCardBtn" src={trash} /></NavLink>
				</div>
				<span className="compCoupCardDescHead">description:</span>
				<p className="compCoupCardDesc">{props.coupon.description}</p>

				<div className="compCoupCardAmoPri">
					<div className="compCoupCardAmount">your stock: {props.coupon.amount}  |</div>
					<div className="compCoupCardAmount">Price: ${props.coupon.price}</div>
				</div>
				<div className="compCoupCardDates">
					<div className="compCoupCardStart">started: {props.coupon.startDate}</div>
					<div className="compCoupCardEnd">expired: {props.coupon.endDate}</div>
				</div>

        </div>
		
    );
}

export default CompanyCouponCard;
