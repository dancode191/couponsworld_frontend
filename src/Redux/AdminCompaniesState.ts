import { createStore } from "redux";
import { CompanyModel } from "../Models/CompanyModel";


export class CompaniesState{
    public companies: CompanyModel[] =[];
}

export enum CompaniesActionType{
    FetchCompanies, AddCompany, UpdateCompany, DeleteCompany
}

export interface CompaniesAction{
    type: CompaniesActionType,
    payload: any
}

export function createFetchAction(companies: CompanyModel[]){
    return {type: CompaniesActionType.FetchCompanies, payload: companies}
}
export function createAddAction(company: CompanyModel){
    return {type: CompaniesActionType.AddCompany, payload: company}
}
export function createUpdateAction(companies: CompanyModel){
    return {type: CompaniesActionType.UpdateCompany, payload: companies}
}
export function createDeleteAction(id: number){
    return {type: CompaniesActionType.DeleteCompany, payload: id}
}

export function companiesReducer(currentState = new CompaniesState(), action: CompaniesAction): CompaniesState {

    const newState = {...currentState};

    switch(action.type){
        
        case CompaniesActionType.FetchCompanies:
            newState.companies = action.payload;
            break;
        case CompaniesActionType.AddCompany:
            newState.companies.push(action.payload);
            break;
        case CompaniesActionType.UpdateCompany:
            const indexToEdit = newState.companies.findIndex(c=> c.id == action.payload.id);
            if(indexToEdit >= 0)
                newState.companies[indexToEdit] = action.payload;
            break;
        case CompaniesActionType.DeleteCompany:
            const indexToDelete = newState.companies.findIndex(c=> c.id == action.payload);
            if(indexToDelete >= 0)
                newState.companies.splice(indexToDelete, 1);
            break;

    }
    return newState;
}

export const adminCompaniesStore = createStore(companiesReducer);