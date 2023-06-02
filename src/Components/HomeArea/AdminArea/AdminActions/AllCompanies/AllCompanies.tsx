import { useEffect, useState } from "react";
import { CompanyModel } from "../../../../../Models/CompanyModel";
import adminService from "../../../../../Services/AdminService";
import notificationService from "../../../../../Services/NotificationService";
import CompanyCard from "../../CompanyCard/CompanyCard";
import "./AllCompanies.css";


function AllCompanies(): JSX.Element {
    const [companies, setCompanies] = useState<CompanyModel[]>([]);

    useEffect(()=>{
        adminService.getAllCompanies()
        .then(company => setCompanies(company))
        .catch(err => notificationService.error(err))

    },[companies])


    return (
        <div className="AllCompanies boxGlassLayer1">
            <div className="cardInfo boxGlassLayer2">
                <p className="info1 info">id</p>
                <p className="info2 info">name</p>
                <p className="info3 info">email</p>
                <p className="info4 info">password</p>
                <p className="info5 info">companies: <span className="compCounter">{companies.length}</span></p>
            </div>
            <div className="companiesDisplay">
                {companies?.map((c) => <CompanyCard key={c.id} company={c} setCompaniesList={setCompanies}/>)}
            </div>
        </div>
    );
}

export default AllCompanies;
