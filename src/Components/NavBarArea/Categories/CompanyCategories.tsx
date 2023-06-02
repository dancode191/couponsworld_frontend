import "./companyCategories.css";
import food from "./categoriesImages/food.png";
import Restaurants from "./categoriesImages/restaurants.png";
import electronics from "./categoriesImages/electronics.png";
import vacations from "./categoriesImages/vacations.png";
import attractions from "./categoriesImages/attractions.png";
import books from "./categoriesImages/books.png";
import home from "./categoriesImages/home.png";
import garden from "./categoriesImages/garden.png";
import pets from "./categoriesImages/pets.png";
import clothing from "./categoriesImages/clothing.png";
import games from "./categoriesImages/games.png";
import { NavLink } from "react-router-dom";

enum categoryType{
    Food,Restaurants, Vacations, Electronics, Attractions, Books, Home, Garden, Pets, Clothing,
    Games
}
function CompanyCategories(): JSX.Element {
    return (
        <div className="Categories ">
			<ul>
            
                {/* passing category string value for filtering by category */}
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[0]}><img className="icon" src={food} alt="Food" /><span className="tooltip ">food</span></NavLink>
                </li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[1]}><img className="icon" src={Restaurants} alt="Restaurants" /><span className="tooltip ">restaurants</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[2]}><img className="icon" src={vacations} alt="vacations" /><span className="tooltip ">vacations</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[3]}><img className="icon" src={electronics} alt="Electronics" /><span className="tooltip ">electronics</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[4]}><img className="icon" src={attractions} alt="Atractions" /><span className="tooltip ">attractions</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[5]}><img className="icon" src={books} alt="Books" /><span className="tooltip ">books</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[6]}><img className="icon" src={home} alt="Home" /><span className="tooltip ">home</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[7]}><img className="icon" src={garden} alt="Garden" /><span className="tooltip ">garden</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[8]}><img className="icon" src={pets} alt="Pets" /><span className="tooltip ">pets</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[9]}><img className="icon" src={clothing} alt="Clothing" /><span className="tooltip ">clothing</span></NavLink></li>
                <li className="toolT"><NavLink to={"/company/category/"+categoryType[10]}><img className="icon" src={games} alt="Games" /><span className="tooltip ">games</span></NavLink></li>
            </ul>
            <div>
                
            </div>
        </div>
    );
}

export default CompanyCategories;
