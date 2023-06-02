import axios from "axios";
import { Observable } from "redux";
import { CompanyModel } from "../Models/CompanyModel";
import { CouponModel } from "../Models/CouponModel";
import { companyStore, couponAdd, couponDelete, couponsFatch, couponUpdate } from "../Redux/CompanyState";
import appConfig from "../Utils/Config";
import notificationService from "./NotificationService";
import { interceptors } from "./TokenInterceptor";



class CompanyService{

    public async addCoupon(coupon: CouponModel){
        interceptors.createInterceptors();

        const response = await axios.post(appConfig.companyUrl + "add", coupon);
        const newCoupon = response.data;
        companyStore.dispatch(couponAdd(newCoupon));
        
    }
    

    public async updateCoupon(coupon: CouponModel){
        interceptors.createInterceptors();
        
        const response = await axios.put<CouponModel>(appConfig.companyUrl +"update", coupon);

        companyStore.dispatch(couponUpdate(response.data));
        
    }

    public async deleteCoupon(id: number){
        interceptors.createInterceptors();
        
        const response = await axios.delete(appConfig.companyUrl + "delete/"+id);
        companyStore.dispatch(couponDelete(id))
        return response.data;
    }

    public async getAllCoupons(){
        interceptors.createInterceptors();
        
        //we check if our global state is empty if yes we send GET request to fatch all coupons and put them in global state, if its not empty we return the coupon list from global state
        if(companyStore.getState().coupons.length == 0){
            
            const response = await axios.get<CouponModel[]>(appConfig.companyUrl + "all");
            companyStore.dispatch(couponsFatch(response.data));
            return response.data;
        }else{

            return companyStore.getState().coupons;
        }
        
    }

    // can add method to return coupons by category but i got them in another way..

    public async getAllCouponsByMaxPrice(maxPrice: number){
        interceptors.createInterceptors();

        const response = await axios.get<CouponModel[]>(appConfig.companyUrl + "maxprice/" + maxPrice);
        return response.data;
    }

    public async getCompanyDetails(){
        interceptors.createInterceptors();

        const response = await axios.get<CompanyModel>(appConfig.companyUrl + "details");
        return response.data;
    }

    public async getOneCouponById(id: number){
        interceptors.createInterceptors();
        
        const response = await axios.get<CouponModel>(appConfig.companyUrl + "one/" + id);
        
        return response.data;
    }

}



const companyService = new CompanyService();
export default companyService;