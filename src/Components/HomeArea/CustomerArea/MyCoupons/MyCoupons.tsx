
import { CouponModel } from "../../../../Models/CouponModel";
import "./MyCoupons.css";


interface myCouponsProps{
    mycoupons: CouponModel;
    setMycoupons?: any;
}

function MyCoupons(props: myCouponsProps): JSX.Element {

    let currentDate = new Date();
    let expDate = new Date(props.mycoupons.endDate);

    return (

        <div className="MyCoupons boxGlassLayer2">
			<div className="myCoupCardImgBox">
                <img src={props.mycoupons.image} alt="coupon image" />
            </div>
            <p className="myCoupCardCategory">Category{">"} {props.mycoupons.category}</p>
            <p className="myCoupCardTitle">{props.mycoupons.title}</p>
            <p className="myCoupCardDesc">{props.mycoupons.description}</p>
            <div className="myCoupPricDisc">
                <p className="myCoupCardPrice">bought it for: $<span className="myCoupCardPriceNum">    {props.mycoupons.price}</span></p>
            </div> 
            <p className="myCoupCardPriceSDate myCoupDate">start at: {props.mycoupons.startDate}</p>
            <p className="myCoupCardPriceEDate myCoupDate">expired at: {props.mycoupons.endDate}</p>
            <p>expired in: <span className="daysToExp">{(Math.floor((expDate.getTime()-currentDate.getTime())/(1000*3600*24))+1) >= 1 ? (Math.floor((expDate.getTime()-currentDate.getTime())/(1000*3600*24))+1): "expired"}</span> days</p>
        </div>
    );
}

export default MyCoupons;
