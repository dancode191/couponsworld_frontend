import axios from "axios";
import { CouponModel } from "../Models/CouponModel";
import { CustomerModel } from "../Models/CustomerModel";
import { customerCouponsFatch, customerCouponsStore } from "../Redux/CustomerCouponsState";
import { couponsFatch, customerStore } from "../Redux/CustomerState";
import appConfig from "../Utils/Config";
import { interceptors } from "./TokenInterceptor";



class CustomerService{
    

    public async PurchaseCoupon(coupon: CouponModel){
        interceptors.createInterceptors();

        const response = await axios.post<string>(appConfig.customerUrl + "purchasecoupon", coupon);
        
    }

    public async getAllCoupons(){
        interceptors.createInterceptors();
        
        
        if(customerStore.getState().coupons.length == 0){
            const response = await axios.get<CouponModel[]>(appConfig.customerUrl + "all");
            customerStore.dispatch(couponsFatch(response.data));
            return response.data;

        }else{
            return customerStore.getState().coupons;
        }
    }

    public async getAllCustomerCoupons(){
        interceptors.createInterceptors();

        if(customerCouponsStore.getState().coupons.length == 0){
            const response = await axios.get<CouponModel[]>(appConfig.customerUrl + "allcustomercoupons");
            customerCouponsStore.dispatch(customerCouponsFatch(response.data));
            return response.data;
        }
        return customerCouponsStore.getState().coupons;
    }

    public async getCustomerCoupsByCategory(category: string){
        interceptors.createInterceptors();

        const response = await axios.get<CouponModel[]>(appConfig.customerUrl + "category/" + category);
        return response.data;
    }

    public async getCustomerCoupsByMaxPrice(maxPrice: number){
        interceptors.createInterceptors();

        const response = await axios.get<CouponModel[]>(appConfig.customerUrl + "maxprice/" + maxPrice);

        return response.data;

    }

    public async getCustomerDetails(){
        interceptors.createInterceptors();
        
        const response = await axios.get<CustomerModel>(appConfig.customerUrl + "details")
        return response.data;
    }


}

const customerService = new CustomerService();
export default customerService;