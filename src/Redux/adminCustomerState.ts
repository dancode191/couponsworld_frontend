import { createStore } from "redux";
import { CustomerModel } from "../Models/CustomerModel";


export class CustomersState{
    public customers: CustomerModel[] = [];
}

export enum CustomersActionType{
    FetchCustomers, AddCustomer, UpdateCustomer, DeleteCustomer
}

export interface CustomersAction{
    type: CustomersActionType,
    payload: any
}

export function fetchAction(customers: CustomerModel[]){
    return {type: CustomersActionType.FetchCustomers, payload: customers}
}
export function addAction(customer: CustomerModel){
    return {type: CustomersActionType.AddCustomer, payload: customer}
}
export function updateAction(customer: CustomerModel){
    return {type: CustomersActionType.UpdateCustomer, payload: customer}
}
export function deleteAction(id: number){
    return {type: CustomersActionType.DeleteCustomer, payload: id}
}

export function customersReducer(currentState = new CustomersState(), action: CustomersAction):CustomersState {
    const newState = {...currentState};

    switch(action.type){

        case CustomersActionType.FetchCustomers:
            newState.customers = action.payload;
            break;
        case CustomersActionType.AddCustomer:
            newState.customers.push(action.payload);
            break;
        case CustomersActionType.UpdateCustomer:
            const indexToEdit = newState.customers.findIndex(c=> c.id == action.payload.id);
            if(indexToEdit >= 0)
                newState.customers[indexToEdit] = action.payload;
            break;
        case CustomersActionType.DeleteCustomer:
            const indexToDelete = newState.customers.findIndex(c=> c.id == action.payload);
            if(indexToDelete >= 0)
                newState.customers.splice(indexToDelete, 1);
            break;
    }
    return newState;
}

export const adminCustomersStore = createStore(customersReducer);

