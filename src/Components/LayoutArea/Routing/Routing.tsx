import { Route, Routes } from "react-router-dom";
import AddCompany from "../../HomeArea/AdminArea/AdminActions/AddCompany/AddCompany";
import AddCustomer from "../../HomeArea/AdminArea/AdminActions/AddCustomer/AddCustomer";
import AllCompanies from "../../HomeArea/AdminArea/AdminActions/AllCompanies/AllCompanies";
import AllCustomers from "../../HomeArea/AdminArea/AdminActions/AllCustomers/AllCustomers";
import UpdateCompany from "../../HomeArea/AdminArea/AdminActions/UpdateCompany/UpdateCompany";
import UpdateCustomer from "../../HomeArea/AdminArea/AdminActions/UpdateCustomer/UpdateCustomer";
import AdminHome from "../../HomeArea/AdminArea/AdminHome/AdminHome";
import CompanyDetails from "../../HomeArea/AdminArea/CompanyDetails/CompanyDetails";
import CustomerDetails from "../../HomeArea/AdminArea/CustomerDetails/CustomerDetails";
import AddCoupon from "../../HomeArea/CompanyArea/CompanyActions/AddCoupon/AddCoupon";
import AllCoupons from "../../HomeArea/CompanyArea/CompanyActions/AllCoupons/AllCoupons";
import CompanyByID from "../../HomeArea/CompanyArea/CompanyActions/CompanyByID/CompanyByID";
import CompCoupsByCategory from "../../HomeArea/CompanyArea/CompanyActions/CompCoupsByCategory/CompCoupsByCategory";
import CompCoupsByMaxPrice from "../../HomeArea/CompanyArea/CompanyActions/CompCoupsByMaxPrice/CompCoupsByMaxPrice";
import MyCompanyDetails from "../../HomeArea/CompanyArea/CompanyActions/MyCompanyDetails/MyCompanyDetails";
import UpdateCoupon from "../../HomeArea/CompanyArea/CompanyActions/UpdateCoupon/UpdateCoupon";
import CustAllCoupons from "../../HomeArea/CustomerArea/CustomerActions/CustAllCoupons/CustAllCoupons";
import AllCustomerCoupons from "../../HomeArea/CustomerArea/CustomerActions/AllCustomerCoupons/AllCustomerCoupons";
import Login from "../../HomeArea/Login/Login";
import "./Routing.css";
import { useState } from "react";
import CustomerCoupsByCategory from "../../HomeArea/CustomerArea/CustomerActions/CustomerCoupsByCategory/CustomerCoupsByCategory";
import CustomerCoupsByMaxPrice from "../../HomeArea/CustomerArea/CustomerActions/CustomerCoupsByMaxPrice/CustomerCoupsByMaxPrice";
import MyCustomerDetails from "../../HomeArea/CustomerArea/CustomerActions/MyCustomerDetails/MyCustomerDetails";
import PageNotFound from "../PageNotFound/PageNotFound";
import CustomerSignUp from "../../HomeArea/customerSignUp/customerSignUp";
import VerifyCustomerEmail from "../../HomeArea/VerifyCustomerEmail/VerifyCustomerEmail";
import CompanySignUp from "../../HomeArea/companySignUp/companySignUp";
import VerifyCompanyEmail from "../../HomeArea/VerifyCompanyEmail/VerifyCompanyEmail";



function Routing(): JSX.Element {

    const [key, setKey] = useState<number>(1);

    return (
        <div className="Routing">
			<Routes >
{/* login/signUp/logout */}
                <Route path="/" element={<Login/>}></Route> 
                <Route path="/login" element={<Login/>}></Route> 
                <Route path="/customerSignUp" element={<CustomerSignUp/>}></Route>
                <Route path="/companySignUp" element={<CompanySignUp/>}></Route>

{/* admin routes: */}
                <Route path="/admin" element={<AdminHome/>}></Route>
                <Route path="/admin/company" element={<AddCompany/>}></Route>
                <Route path="/admin/company/allcompanies" element={<AllCompanies/>}></Route>
                <Route path="/admin/updatecompany/:compName/:compId" element={<UpdateCompany/>}></Route>
                <Route path="/admin/companydetails/:compId" element={<CompanyDetails/>}></Route>
                
                <Route path="/admin/customer" element={<AddCustomer/>}></Route>
                <Route path="/admin/customer/allcustomers" element={<AllCustomers/>}></Route>
                <Route path="/admin/updatecustomer/:custId" element={<UpdateCustomer/>}></Route>
                <Route path="/admin/customerdetails/:custId" element={<CustomerDetails/>}></Route>

{/* Company routes: */}
                <Route path="/company" element={<AllCoupons/>}></Route>
                <Route path="/company/add" element={<AddCoupon/>}></Route>
                <Route path="/company/all" element={<AllCoupons/>}></Route>
                <Route path="/company/update/:coupID" element={<UpdateCoupon/>}></Route>
                <Route path="/company/category/:category" element={<CompCoupsByCategory/>}></Route>
                <Route path="/company/maxprice/:price" element={<CompCoupsByMaxPrice/>}></Route>
                <Route path="/company/details/" element={<MyCompanyDetails/>}></Route>
                <Route path="/company/companyByID/:compByID" element={<CompanyByID/>}></Route>
                <Route path="/CompanyVerifyPage/:emailCode" element={<VerifyCompanyEmail/>}></Route>
{/* Customer routes: */}
                <Route path="/customer/all" element={<CustAllCoupons/>}></Route>
                <Route path="/customer/allcustomercoupons" element={<AllCustomerCoupons/>}></Route>
                <Route path="/customer/category/:category" element={<CustomerCoupsByCategory/>}></Route>
                <Route path="/customer/maxprice/:price" element={<CustomerCoupsByMaxPrice/>}></Route>
                <Route path="/customer/myDetails" element={<MyCustomerDetails/>}></Route>
                <Route path="/CustomerVerifyPage/:emailCode" element={<VerifyCustomerEmail/>}></Route>

                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
            
        </div>
    );
}

export default Routing;
