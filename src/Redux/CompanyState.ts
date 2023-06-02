import { createStore } from "redux";
import { CouponModel } from "../Models/CouponModel";



export class CompanyState{
    coupons: CouponModel[] = [];
}

export enum CompanyActionType{
    FetchCoupons, AddCoupon, UpdateCoupon, DeleteCoupon
}

export interface CompanyAction{
    type: CompanyActionType,
    payload: any
}

export function couponsFatch(coupons: CouponModel[]){
    return{type: CompanyActionType.FetchCoupons, payload: coupons}
}
export function couponAdd(coupon: CouponModel){
    return{type: CompanyActionType.AddCoupon, payload: coupon}
}
export function couponUpdate(coupon: CouponModel){
    return{type: CompanyActionType.UpdateCoupon, payload: coupon}
}
export function couponDelete(id: number){
    return{type: CompanyActionType.DeleteCoupon, payload: id}
}

export function companyReducer(currentState = new CompanyState(), action: CompanyAction):CompanyState{

    const newState = {...currentState};

    switch(action.type){

        case CompanyActionType.FetchCoupons:
            newState.coupons = action.payload;
            break;
        
        case CompanyActionType.AddCoupon:  
            newState.coupons.push(action.payload);
            break;  
            case CompanyActionType.UpdateCoupon:
                const indexToUpdate = newState.coupons.findIndex(c=> c.id == action.payload.id);
                if(indexToUpdate >= 0)
                    newState.coupons[indexToUpdate] = action.payload;
                break;
            case CompanyActionType.DeleteCoupon:
                const indexToDelete = newState.coupons.findIndex(c=> c.id == action.payload);
                if(indexToDelete >= 0)
                    newState.coupons.splice(indexToDelete, 1);
                break;
    }   

    return newState;
}


export const companyStore = createStore(companyReducer);