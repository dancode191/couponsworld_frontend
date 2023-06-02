import { CompanyModel } from "./CompanyModel";

export class CouponModel{
    public id: number;
    public title: string;
    public description: string;
    public category: string;
    public company: CompanyModel;
    public amount: number;
    public price: number;
    public startDate: string;
    public endDate: string;
    public image: string;
    public imageFile: File | FileList | string;

    constructor(id: number, title: string, description: string, category: string, company: CompanyModel, amount: number, price: number, startDate: string, endDate: string, image: string, 
    imageFile: File | FileList | string){

        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.company = company;
        this.amount = amount;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;
        this.imageFile = imageFile;
    }

    
    
}