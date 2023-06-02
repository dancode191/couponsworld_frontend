import "./Header.css";
import logo from "../../../couponImages/coupon.png"
import earth from "../images/earth.png"

function Header(): JSX.Element {
    return (
        <div className="Header">
			<img className="logo" src={logo} alt="logo" />
            <h2>Coupons World</h2>
            <img className="headerImage" src={earth} alt="earth" />
        </div>
    );
}

export default Header;
