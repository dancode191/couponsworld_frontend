import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CompanyModel } from "../../../../../Models/CompanyModel";
import { companyStore } from "../../../../../Redux/CompanyState";
import companyService from "../../../../../Services/CompanyService";
import notificationService from "../../../../../Services/NotificationService";
import "./MyCompanyDetails.css";




function MyCompanyDetails(): JSX.Element {
    const [company, setCompany] = useState<CompanyModel>();

    let numOfCompCoupons = companyStore.getState().coupons.length;

    useEffect(()=>{
        companyService.getCompanyDetails()
        .then((c)=>{
            setCompany(c);
        })
        .catch(err=> {
            notificationService.error(err)
        })
    },[])

    return (
        <div className="MyCompanyDetails boxGlassLayer1">
            {company && <>

                        <h2>{company.name}</h2>
                        <p className="compDetailsLine"><span> Company ID: </span> {company.id}</p>
                        <p className="compDetailsLine"><span> Email: </span> {company.email}</p>
                        <p className="compDetailsLine"><span> Password: </span> {company.password}</p>
                        <p className="coupcountContainer">you have <span className="companyCoupondCount">{numOfCompCoupons}</span> coupons in your store</p>
                        <NavLink className="compInfoBackBtn backBtn" to={"/company/all"}>Back</NavLink>

            </>}
        </div>
    );
}

export default MyCompanyDetails;
