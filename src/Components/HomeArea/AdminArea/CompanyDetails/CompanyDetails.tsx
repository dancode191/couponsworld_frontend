import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CompanyModel } from "../../../../Models/CompanyModel";
import { CouponModel } from "../../../../Models/CouponModel";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import CompCouponCard from "../CompCouponCard/CompCouponCard";
import "./CompanyDetails.css";

function CompanyDetails(): JSX.Element {
    const [company, setCompany] = useState<CompanyModel>();
    const [coupons, setCoupons] = useState<CouponModel[]>([]);

    const param = useParams();
    const id = +param.compId!;

    useEffect(()=>{
        adminService.getOneCompany(id)
        .then((c)=> {
            setCompany(c);
            
        } )
        .catch(err => notificationService.error(err))

        adminService.getAllCompanyCouponsById(id)
        .then((c)=> {
            setCoupons(c);
        })
        .catch(err=> notificationService.error(err))


    },[])


    return (
        <div className="CompDetails boxGlassLayer1">
            {company && <>
			<div className="comp-container">
                <div className="comp-details boxGlassLayer2">
                    <h3>{company.name}</h3>
                    <div className="comp-info">
                        <p>Company ID: {company.id}</p>
                        <p>Email: {company.email}</p>
                        <p>Password: {company.password}</p>
                        <p >Coupons: <span style={{color: coupons.length ? 'green' : 'red'}}>{coupons.length}</span></p>
                        <NavLink className="compBackBtn backBtn" to={"/admin/company/allcompanies"}>Back</NavLink>
                    </div>
                </div>
                <div className="comp-Coupons boxGlassLayer3">
                    <div className="compCoupons-info">
                        <p className="compC1">id</p>
                        <p className="compC2 compCoup">title</p>
                        <p className="compC3 compCoup">description</p>
                        <p className="compC4 compCoup">category</p>
                        <p className="compC5 compCoup">companyID</p>
                        <p className="compC6 compCoup">amount</p>
                        <p className="compC7 compCoup">price</p>
                        <p className="compC8 compCoup">startDate</p>
                        <p className="compC9 compCoup">endDate</p>
                    </div>
                    <div className="compCoup-display">
                        {coupons?.map((c)=> <CompCouponCard key={c.id} coupon={c}  />)}
                    </div>
                </div>
            </div>
            </>}
        </div>
    
    );
}

export default CompanyDetails;
