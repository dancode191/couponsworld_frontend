import { useEffect, useState } from "react";
import { CustomerModel } from "../../../../../Models/CustomerModel";
import { adminCustomersStore } from "../../../../../Redux/adminCustomerState";
import adminService from "../../../../../Services/AdminService";
import notificationService from "../../../../../Services/NotificationService";
import CustomerCard from "../../CustomerCard/CustomerCard";
import "./AllCustomers.css";


function AllCustomers(): JSX.Element {
    const [customers, setCustomers] = useState<CustomerModel[]>([]);

    useEffect(()=>{
        adminService.getAllCustomers()
        .then((cust)=> setCustomers(cust))
        .catch(err=> notificationService.error(err))
    },[customers])

    return (
        <div className="AllCustomers boxGlassLayer1">
			<div className="castumerCardInfo boxGlassLayer2">
                <p className="cuInfo1 customercard">id</p>
                <p className="cuInfo2 customercard">first name</p>
                <p className="cuInfo3 customercard">last name</p>
                <p className="cuInfo4 customercard">email</p>
                <p className="cuInfo5 customercard">password</p>
                <p className="cuInfo6 customercard">customers: <span className="custCounter">{customers.length}</span></p>
            </div>
            <div className="customersDisplay">
                {customers?.map((c)=> <CustomerCard key={c.id} customer={c} setCustomersList={setCustomers}/>)}
            </div>

        </div>
    );
}

export default AllCustomers;
