import { request } from "https";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AdminAuthStore } from "../../../Redux/AdminAuthState";
import { adminCompaniesStore } from "../../../Redux/AdminCompaniesState";
import { CompanyAuthStore } from "../../../Redux/CompanyAuthState";
import { companyStore } from "../../../Redux/CompanyState";
import { CustomerAuthStore } from "../../../Redux/CustomerAuthState";
import authService from "../../../Services/AuthService";
import CompanyCategories from "../Categories/CompanyCategories";
import CustomerCategories from "../Categories/CustomerCategories";
import "./NavBar.css";



function NavBar(): JSX.Element {

    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [coupID, setCoupID] = useState<number>(0);
    const navigate = useNavigate();
    //for navigate between users screens
    const [admin, setAdmin] = useState<string>();
    const [company, setCompany] = useState<string>();
    const [customer, setCustomer] = useState<string>();


    useEffect(() => {
        if (localStorage.getItem("token")) {
            const type: string = jwtDecode(localStorage.getItem("token"));
            if (AdminAuthStore.getState().user.type === "Admin")
                setAdmin(type)
            else if (CompanyAuthStore.getState().user.type === "Company")
                setCompany(type)
            else
                setCustomer(type)
        }

        AdminAuthStore.subscribe(() => {
            setAdmin(AdminAuthStore.getState().user.type)
        })
        CompanyAuthStore.subscribe(() => {
            setCompany(CompanyAuthStore.getState().user.type)
        })
        CustomerAuthStore.subscribe(() => {
            setCustomer(CustomerAuthStore.getState().user.type)
        })

    }, [])

    function logout() {
        authService.logout();
        navigate("/login");
    }


    return (
        <div className="NavBar boxGlassLayer1">
            {company && <>
                <p className="userName">Welcome: <span className="compNameStyle">{CompanyAuthStore.getState().user.name}</span></p>
            </>}
            {customer && <>
                <p className="userName">Welcome: <span className="compNameStyle">{CustomerAuthStore.getState().user.firstName + " " + CustomerAuthStore.getState().user.lastName}</span></p>
            </>}
            <div className="navbarBox">
                {(admin || company || customer) && <>
                    {/* menu open/close button */}
                    <div className="mainMenuBtn"
                        onClick={() => {
                            const menu = document.querySelector(".Menu");
                            menu.classList.toggle("activeMenu")
                        }}>
                        <div className="threelines"></div>
                    </div>
                </>}

                <div className="navBarRouting">

                    {/* admin navbar: */}
                    {admin && <>
                        <p className="userName">Welcome: <span className="compNameStyle">Admin</span></p>
                    </>}
                    {/* company navbar: */}
                    {company && <>
                        <div className="companyNavBar">
                            <div className="companysortBy">Sort By:</div>

                            <button onClick={function showCategories() {
                                const cateBar = document.querySelector(".companyCategories");
                                cateBar.classList.toggle("activeCategories");

                            }} className="compCategoryBtn navBarLink" >Categories
                            </button>
                            <div className="companyCategories">
                                <CompanyCategories />
                            </div>

                            <div className="companyMaxPriceBtn">
                                <button onClick={function showMaxPrice() {
                                    const maxPriceBar = document.querySelector(".compMaxPriceBar");
                                    maxPriceBar.classList.toggle("activemaxbar");
                                }} className="compMaxPriceBtn">Max Price
                                </button>
                                <div className="compMaxPriceBar">
                                    <label >Enter Max Price:</label>
                                    <input className="inputDesign" type="number" placeholder="Enter max price" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.valueAsNumber) }} />
                                    <NavLink className="maxPriceFilterBtn" to={"/company/maxprice/" + maxPrice}>Go</NavLink>
                                </div>
                            </div>

                            <div className="GetCouponByID">
                                <button onClick={function showCoupIdBar() {
                                    const coupIdBtn = document.querySelector(".coupIdBar");
                                    coupIdBtn.classList.toggle("activeCoupidBar");
                                }} className="coupIdBtn">Coupon ID
                                </button>
                                <div className="coupIdBar">
                                    <label >Enter coupon ID:</label>
                                    <input className="inputDesign" type="number" placeholder="Enter coupon ID" value={coupID} onChange={(e) => { setCoupID(e.target.valueAsNumber) }} />
                                    <NavLink className="CoupIdFilterBtn" to={"/company/companyByID/" + coupID}>Go</NavLink>
                                </div>
                            </div>
                        </div>
                    </>}
                    {/* customer navbar: */}
                    {customer && <>
                        <div className="customerNavBar">
                            <div className="customersortBy">Sort By:</div>

                            <button onClick={function showCategories() {
                                const cateBar = document.querySelector(".customerCategories");
                                cateBar.classList.toggle("activeCustomerCategories");

                            }} className="custCategoryBtn navBarLink" >Categories
                            </button>
                            <div className="customerCategories">
                                <CustomerCategories />
                            </div>

                            <div className="customerMaxPriceBtn">
                                <button onClick={function showMaxPrice() {
                                    const maxPriceBar = document.querySelector(".custMaxPriceBar");
                                    maxPriceBar.classList.toggle("activeCustomermaxbar");
                                }} className="custMaxPriceBtn">Max Price
                                </button>
                                <div className="custMaxPriceBar">
                                    <label >Enter Max Price:</label>
                                    <input className="inputDesign" type="number" placeholder="Enter max price" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.valueAsNumber) }} />
                                    <NavLink className="maxPriceFilterBtn" to={"/customer/maxprice/" + maxPrice}>Go</NavLink>
                                </div>
                            </div>
                        </div>
                    </>}
                    {/* login-out bar: */}
                    <div className="loginOutNavBar">
                        {!(admin || company || customer) && <>
                            <NavLink className="loginBtn navBarLink" to="/login">Login</NavLink>
                            <NavLink className="navBarLink" to="/customerSignUp">Customer Sign-Up</NavLink>
                            <NavLink className="navBarLink" to="/companySignUp">Company Sign-Up</NavLink>

                        </>}
                        {(admin || company || customer) && <>
                            <NavLink className="logoutBtn navBarLink" to="" onClick={logout}>Logout</NavLink>
                        </>}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default NavBar;
