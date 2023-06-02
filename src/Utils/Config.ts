
class Config{

}


class DevelopmentConfig extends Config{
    public adminUrl: string = "https://coupons-world-backend.onrender.com/admin/";
    public authUrl: string = "https://coupons-world-backend.onrender.com/auth/";
    public companyUrl: string = "https://coupons-world-backend.onrender.com/company/";
    public customerUrl: string = "https://coupons-world-backend.onrender.com/customer/";
}


class ProductionConfig extends Config{
    public adminUrl: string = "https://coupons-world-backend.onrender.com/admin/";
    public authUrl: string = "https://coupons-world-backend.onrender.com/auth/";
    public companyUrl: string = "https://coupons-world-backend.onrender.com/company/";
    public customerUrl: string = "https://coupons-world-backend.onrender.com/customer/";
}


const appConfig = process.env.NODE_ENV ==="development"? new DevelopmentConfig() : new
ProductionConfig();

export default appConfig;


