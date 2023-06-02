import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CouponModel } from "../../../../../Models/CouponModel";
import companyService from "../../../../../Services/CompanyService";
import notificationService from "../../../../../Services/NotificationService";
import CompanyCouponCard from "../../CompanyCouponCard/CompanyCouponCard";
import edit from "../../images/edit.svg"
import trash from "../../images/trashCan.svg"
import "./CompanyByID.css";

function CompanyByID(): JSX.Element {
    const [coupon, setCoupon] = useState<CouponModel>();

    const param = useParams();
    const couponID = +param.compByID!;
    const navigate = useNavigate();
    

    useEffect(()=>{
        companyService.getOneCouponById(couponID)
        .then((c)=>{
            setCoupon(c);
        })
        .catch(err=> notificationService.error(err))
    },[couponID])

    function deleteCoupon(){
        companyService.deleteCoupon(coupon.id)
        .then(()=>{
            notificationService.success("coupon deleted successfuly!");
            navigate("/company/all");
        })
        .catch(err=> notificationService.error(err))
    }

    return (
        <div className="CompanyByID boxGlassLayer1">
			{coupon && <>
				<div className="coupbyIdImageBox">
					<img src={coupon.image} alt="imageNotfound" />
				</div>
				<div className="coupByIdCardInfo">
                    <div className="coupByIdCategory">Category {">"} {coupon.category}</div>
                    <div className="coupByIdNum">ProdID: {coupon.id}</div>
                </div>
                <div className="coupByIdCardSettings">
                    <NavLink className="coupByIdUpdate" to={"/company/update/" + coupon.id}><img className="coupByIdImg" src={edit}></img></NavLink>
                    <div className="coupByIdTitle">{coupon.title}</div>
                    <NavLink className="coupByIdDelete" to={""} onClick={deleteCoupon}><img className="coupByIdImg" src={trash}></img></NavLink>
                </div>
                <span className="coupByIdDescrip">description:</span>
                <p className="coupByIdDescripBox">{coupon.description}</p>    
                <div className="coupByIdAmountPrice">
                    <div >your stock: {coupon.amount}</div>
                    <div >Price: {coupon.price}</div>
                </div>
                <div className="coupByIdDates">
                    <div>started: {coupon.startDate}</div>
                    <div>expired: {coupon.endDate}</div>
                </div>

			</>}
        </div>
    );
}

export default CompanyByID;
