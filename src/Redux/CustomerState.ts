import { createStore } from "redux";
import { CouponModel } from "../Models/CouponModel";



export class CustomerState{
    coupons: CouponModel[] = [];
    
}
export enum CustomerActionType{
    FetchCoupons
}

export interface CustomerAction{
    type: CustomerActionType,
    payload: any
}

export function couponsFatch(coupons: CouponModel[]){
    return{type: CustomerActionType.FetchCoupons, payload: coupons}
}

export function customerReducer(currentState = new CustomerState(), action: CustomerAction):CustomerState{
    const newState = {...currentState};

    switch(action.type){
        case CustomerActionType.FetchCoupons:
            newState.coupons = action.payload;
            break;
    }
    return newState;
}

export const customerStore = createStore(customerReducer);
