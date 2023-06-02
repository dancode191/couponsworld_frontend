import "./AdminHome.css";

function AdminHome(): JSX.Element {

    
    return (
        <div className="AdminHome boxGlassLayer1">
            <div className="AdminWelcome">
                <h1 className="adminHeadline">Welcome  Admin</h1>
                <h1 className="adminActionLine">Add Company</h1>
                <span>add company to your inventory by add company: name, email, password</span>
                <h1 className="adminActionLine">Show All Companies</h1>
                <span>show all companies in your inventory, you can: edit and delete</span>
                <h1 className="adminActionLine">Add customer</h1>
                <span>add customer to your inventory by add customer: first name, last name, email, password</span>
                <h1 className="adminActionLine">Show all customers</h1>
                <span>show all customers in your inventory, you can: edit and delete</span>
            </div>
        </div>
    );
}

export default AdminHome;
