import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CouponModel } from "../../../../../Models/CouponModel";
import { CompanyAuthStore } from "../../../../../Redux/CompanyAuthState";
import { companyStore, couponsFatch } from "../../../../../Redux/CompanyState";
import companyService from "../../../../../Services/CompanyService";
import notificationService from "../../../../../Services/NotificationService";
import "./AddCoupon.css";



function AddCoupon(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CouponModel>();
    const navigate = useNavigate();
    
    function send(coupon:CouponModel){
        const compId = CompanyAuthStore.getState().user.id;
        
        coupon.company = { 
            id: compId
        }

        let image = coupon.imageFile as FileList
        let reader = new FileReader();
        reader.readAsDataURL(image[0]);

        reader.onload = ()=>{
        coupon.image = reader.result as string;
        companyService.addCoupon(coupon)
        .then(()=>{
            notificationService.success("add coupon successfuly!");
            
            //i add the below line for trigger render by redux so when i add coupon i will be able to see it when filtering by category
            companyStore.dispatch(couponsFatch([]));

            navigate("/company/all");
        })
        .catch(err=> {
            notificationService.error(err)
            
        })

        }
    }


    return (
        <div className="AddCoupon boxGlassLayer1">
            <h2>Add Coupon</h2>
            <form onSubmit={handleSubmit(send)}>
                <div className="input-left">
                <label>Title</label><br />
                <input className="inputDesign" type="text" placeholder="Enter coupon title" {...register("title",{
                    required: {value: true, message: "you must enter coupon title"},
                    maxLength: {value: 18, message: "you cant type more then 18 char"}
                })} /><br />
                <span className="addCoupError">{formState.errors?.title?.message}</span><br />

                <label>Description</label><br />
                <input className="inputDesign" type="text" placeholder="Enter coupon description" {...register("description",{
                    required: {value: true, message: "you must enter coupon description"}
                })} /><br />
                <span className="addCoupError">{formState.errors?.description?.message}</span><br />

                <label>Category</label><br />
                <select className="inputDesign" id="category"{...register("category",{
                    required: {value: true, message: "you must select coupon category"}
                })}>
                    <option value="Food">Food</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Vacations">Vacations</option>
                    <option value="Attractions">Attractions</option>
                    <option value="Books">Books</option>
                    <option value="Home">Home</option>
                    <option value="Garden">Garden</option>
                    <option value="Pets">Pets</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Games">Games</option>
                </select><br />
                <span className="addCoupError">{formState.errors?.category?.message}</span><br />
                
                <label>Coupon amount</label><br />
                <input className="inputDesign" type="number" placeholder="Enter coupon quantity" {...register("amount",{
                    required: {value: true, message: "you must enter coupon amount"},
                    max: {value: 1000, message: "you cant enter coupon amount more then 100 "},
                    min: {value: 1, message: "you cant enter coupon amount less then 1 "}
                })} /><br />
                <span className="addCoupError">{formState.errors?.amount?.message}</span><br />

                </div>
                <div className="input-right">

                <label>Coupon price</label><br />
                <input className="inputDesign" type="number" placeholder="Enter coupon price" {...register("price",{
                    required: {value: true, message: "you must enter coupon price"},
                    max: {value: 10000, message: "you cant enter coupon price more then 10000 "},
                    min: {value: 1, message: "you cant enter coupon price less then 1 "}
                })} /><br />
                <span className="addCoupError">{formState.errors?.price?.message}</span><br />

                <label>Start Date</label><br />
                <input className="inputDesign" type="date" placeholder="Enter coupon start date" {...register("startDate",{
                    required: {value: true, message: "you must enter coupon start date"}
                })}/><br />
                <span className="addCoupError">{formState.errors?.startDate?.message}</span><br />

                <label>Expiration Date</label><br />
                <input className="inputDesign" type="date" placeholder="Enter coupon expiration date" {...register("endDate",{
                    required: {value: true, message: "you must enter coupon expiration date"}
                })}/><br />
                <span className="addCoupError">{formState.errors?.endDate?.message}</span><br />

                <label>upload coupon picture:</label><br />
                <input className="inputDesign" type="file" placeholder="upload coupon picture file" {...register("imageFile",{
                    required: {value: true, message: "you must upload coupon picture file"}
                })} /><br />
                <span className="addCoupError">{formState.errors?.imageFile?.message}</span><br />
                </div>
                <button className="btnDes">Add Coupon</button>
            </form>
			
        </div>
    );
}

export default AddCoupon;
