import { createStore } from "redux";
import { CouponModel } from "../Models/CouponModel";



export class CustomerCouponsState{
    coupons: CouponModel[] = [];
}

export enum CustomerCouponsActionType{
    FetchCoupons
}

export interface CustomerCouponsAction{
    type: CustomerCouponsActionType,
    payload: any
}

export function customerCouponsFatch(coupons: CouponModel[]){
    return{type: CustomerCouponsActionType.FetchCoupons, payload: coupons}
}

export function customerCouponsReducer(currentState = new CustomerCouponsState(), action: CustomerCouponsAction):CustomerCouponsState{
    
    const newState = {...currentState};

    switch(action.type){
        case CustomerCouponsActionType.FetchCoupons:
            newState.coupons = action.payload;
            break;
    }
    return newState;
}

export const customerCouponsStore = createStore(customerCouponsReducer);