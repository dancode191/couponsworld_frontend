import axios from "axios";
import { CompanyModel } from "../Models/CompanyModel";
import { CouponModel } from "../Models/CouponModel";
import { CustomerModel } from "../Models/CustomerModel";
import { adminCompaniesStore, createAddAction, createDeleteAction, createFetchAction, createUpdateAction } from "../Redux/AdminCompaniesState";
import { addAction, adminCustomersStore, deleteAction, fetchAction, updateAction } from "../Redux/adminCustomerState";
import appConfig from "../Utils/Config";


class AdminService{
    //Add Company
    public async addCompany(company: CompanyModel){
        const response = (await axios.post<CompanyModel>(appConfig.adminUrl + "company", company)).data;
        adminCompaniesStore.dispatch(createAddAction(response));
        
    }

    public async updateCompany(company: CompanyModel){
        const response = await axios.put<CompanyModel>(appConfig.adminUrl + "updatecompany", company);
        adminCompaniesStore.dispatch(createUpdateAction(company));
    }


    public async getAllCompanies(){
        if(adminCompaniesStore.getState().companies.length <= 1){
            const response = await axios.get<CompanyModel[]>(appConfig.adminUrl + "allcompanies")

            adminCompaniesStore.dispatch(createFetchAction(response.data))
            return response.data;
        }else{
            return adminCompaniesStore.getState().companies;
        }
        
    }

    public async deleteCompany(id: number){
        const response = (await axios.delete(appConfig.adminUrl +"deletecompany/" + id)).data;
        //we update the global state 
        adminCompaniesStore.dispatch(createDeleteAction(id));
        return response;
    }

    public async getOneCompany(id: number){
        //i cehck if we have a company of that id in our global state if not i send axios requeset
        const company = adminCompaniesStore.getState().companies.find(p=> p.id == id);
        if(typeof company == "undefined"){
            const response = await axios.get<CompanyModel>(appConfig.adminUrl + id)
            return response.data;
        }else{
            return company;
        }

    }

    public async addCustomer(customer: CustomerModel){
        const response = (await axios.post<CustomerModel>(appConfig.adminUrl + "customer", customer)).data;

        adminCustomersStore.dispatch(addAction(response));

    }

    public async getAllCustomers(){
        if(adminCustomersStore.getState().customers.length <= 1){
            const response = await axios.get<CustomerModel[]>(appConfig.adminUrl + "allcustomers");
            adminCustomersStore.dispatch(fetchAction(response.data))
            return response.data;
        } else {
            return adminCustomersStore.getState().customers;
        }
    }

    public async deleteCustomer(id: number){
        const response = (await axios.delete(appConfig.adminUrl + "deletecustomer/" + id)).data;
        adminCustomersStore.dispatch(deleteAction(id));
        return response;
    }

    public async updateCustomer(customer: CustomerModel){
        const response = (await axios.put<CustomerModel>(appConfig.adminUrl + "updatecustomer", customer));

        adminCustomersStore.dispatch(updateAction(customer));
    }

    public async getOneCustomer(id: number){
        //here i send axios request to get the customer.
        const response = await axios.get<CustomerModel>(appConfig.adminUrl + "onecustomer/" + id)
        return response.data;

    }

    
//i add those 2 methods to admin cause a problem i had to display coupons in admin-> company/customer details(client side)

    public async getAllCompanyCouponsById(id: number){
        const response = await axios.get<CouponModel[]>(appConfig.adminUrl + "allcompanycoupons/" + id);

        return response.data;
    }

    public async getAllCustomerCouponsById(id: number){
        const response = await axios.get<CouponModel[]>(appConfig.adminUrl + "allcustomercoupons/" + id);

        return response.data;
    }




}



const adminService = new AdminService();
export default adminService;


