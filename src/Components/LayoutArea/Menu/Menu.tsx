import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AdminAuthStore } from "../../../Redux/AdminAuthState";
import { CompanyAuthStore } from "../../../Redux/CompanyAuthState";
import { CustomerAuthStore } from "../../../Redux/CustomerAuthState";
import "./Menu.css";

function Menu(): JSX.Element {
    const [admin, setAdmin] = useState<string>();
    const [company, setCompany] = useState<string>();
    const [customer, setCustomer] = useState<string>();


    useEffect(()=>{
        if(localStorage.getItem("token")){
            const type: string = jwtDecode(localStorage.getItem("token"));
            console.log("reading type: " + type);
            
            if(AdminAuthStore.getState().user.type === "Admin")
                setAdmin(type)
            else if(CompanyAuthStore.getState().user.type === "Company")
                setCompany(type)
            else 
                setCustomer(type)
            
        }

        AdminAuthStore.subscribe(()=>{
            setAdmin(AdminAuthStore.getState().user.type)
        })
        CompanyAuthStore.subscribe(()=>{
            setCompany(CompanyAuthStore.getState().user.type)
        })
        CustomerAuthStore.subscribe(()=>{
            setCustomer(CustomerAuthStore.getState().user.type)
        })


    },[])
    
    
    return (
        
        <div className="Menu boxGlassLayer1">


{/* admin menu */}
            {admin && <>
		    <div className="adminMenu">
                <ul>
                    <li><NavLink className="adminMenuBtn" to={"/admin/company"}>Add Company</NavLink></li>
                    <li><NavLink className="adminMenuBtn" to={"/admin/company/allcompanies"}>Show All Companies</NavLink></li>
                    <li><NavLink className="adminMenuBtn" to={"/admin/customer"}>Add Customer</NavLink></li>
                    <li><NavLink className="adminMenuBtn" to={"/admin/customer/allcustomers"}>Show All Customer</NavLink></li>
                    <li><NavLink className="adminMenuBtn" to={"/admin"}>Home</NavLink></li>
                </ul> 
            </div>    
            </>}
{/* company menu */}
            {company && <>
            <div className="companyMenu">
                <ul>
                    <li><NavLink className="companyMenuBtn" to={"/company/add"}>Add Coupon</NavLink></li>
                    <li><NavLink className="companyMenuBtn" to={"/company/all"}>Show My Coupons</NavLink></li>
                    <li><NavLink className="companyMenuBtn" to={"/company/details"}>My Details</NavLink></li>
                </ul>
            </div>
            </>}
{/* customer menu */}
            
            {customer && <>
            <div className="customerMenu">
                <ul>
                <li><NavLink className="customerMenuBtn" to={"/customer/all"}>Show All Coupons</NavLink></li>
                <li><NavLink className="customerMenuBtn" to={"/customer/allcustomercoupons"}>My Coupons</NavLink></li>
                <li><NavLink className="customerMenuBtn" to={"/customer/myDetails"}>My Details</NavLink></li>
                </ul>
            </div>
            </>}
        </div>
        
    );
}

export default Menu;
