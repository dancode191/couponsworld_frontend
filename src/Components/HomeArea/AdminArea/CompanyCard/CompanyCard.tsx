import { Link, NavLink } from "react-router-dom";
import { CompanyModel } from "../../../../Models/CompanyModel";
import "./CompanyCard.css";
import trashCan from "../images/trashCan.svg";
import edit from "../images/edit.svg";
import adminService from "../../../../Services/AdminService";
import notificationService from "../../../../Services/NotificationService";


    interface companyProps{
        company: CompanyModel;
        setCompaniesList: any;
    }

    function CompanyCard(props: companyProps): JSX.Element {


    function deleteCompany(){

        adminService.deleteCompany(props.company.id)
        .then(()=>{
            notificationService.success("company " + props.company.name +" deleted successfuly!");
            //add this to trigger rerender all company list after deleteing company
            props.setCompaniesList([]);

        })
        .catch(err=> notificationService.error(err));
    }


    return (
            <div className="CompanyCard boxGlassLayer2">
                <div className="compLine L1">{props.company.id}</div>
			    <div className="compLine L2"><Link className="compNameLink" to={"/admin/companydetails/"+props.company.id}>{props.company.name}</Link>
                    </div>
			    <div className="compLine L3">{props.company.email}</div>
			    <div className="compLine L4">{props.company.password}</div>
                
                    <NavLink className="editComp" to={ "/admin/updatecompany/"+props.company.name+"/"+props.company.id }><img className="cardBtn" src={edit}></img></NavLink>
                    <NavLink className="trashComp" to={""} onClick={deleteCompany}><img className="cardBtn" src={trashCan}></img>
                    </NavLink>
                
            </div>
    );
}

export default CompanyCard;
