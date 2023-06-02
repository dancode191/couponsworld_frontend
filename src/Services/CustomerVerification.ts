import axios from "axios";
import { CustomerModel } from "../Models/CustomerModel";
import appConfig from "../Utils/Config";

// i send customer signup data to backend for getting token(for sending in the link)

class CustomerVerification{

    public async verifyCustomer(customer: CustomerModel){
        await axios.post<string>(appConfig.customerUrl + "verify", customer);

    }

     // add the customer to DB after verify his email
    public async customerSignUp(token: String){
        await axios.post<CustomerModel>(appConfig.customerUrl + "signUp/"+ token)
    }

}

const customerVerification = new CustomerVerification();
export default customerVerification;