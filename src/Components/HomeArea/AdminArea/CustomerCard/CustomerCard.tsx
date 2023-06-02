import { NavLink, useNavigate } from "react-router-dom";
import { CustomerModel } from "../../../../Models/CustomerModel";
import { adminCustomersStore, fetchAction } from "../../../../Redux/adminCustomerState";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";
import edit from "../images/edit.svg";
import trash from "../images/trashCan.svg";
import "./CustomerCard.css";


interface customerProps{
    customer: CustomerModel;
    setCustomersList: any;
}

function CustomerCard(props: customerProps): JSX.Element {

    function deleteCustomer(){
        adminService.deleteCustomer(props.customer.id)
        .then(()=>{
            notificationService.success("customer "+ props.customer.firstName + " " + props.customer.lastName + " was deleted successfuly!");
            //add this to trigger rerender all customer list after deleteing customer
            props.setCustomersList([])

        })
        .catch(err=> notificationService.error(err));
    }

    return (
        <div className="CustomerCard boxGlassLayer2">
			<div className="custLine cu1">{props.customer.id}</div>
			<div className="custLine cu2"><NavLink className="custNameLink" to={"/admin/customerdetails/"+ props.customer.id}>{props.customer.firstName}</NavLink></div>
			<div className="custLine cu3">{props.customer.lastName}</div>
			<div className="custLine cu4">{props.customer.email}</div>
			<div className="custLine cu5">{props.customer.password}</div>
            <NavLink className="editCust" to={"/admin/updatecustomer/"+props.customer.id}><img className="cardBtn" src={edit} /></NavLink>
            <NavLink className="trashCust" to={""} onClick={deleteCustomer}><img className="cardBtn" src={trash} /></NavLink>
 
        </div>
    );
}

export default CustomerCard;
