import "./CustomerCategories.css";
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

function CustomerCategories(): JSX.Element {

    
    return (
        <div className="CustomerCategories">
			<ul>
                {/* passing category string value for filtering by category */}
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[0]}><img className="icon" src={food} alt="Food" /><span className="custToolTip">food</span></NavLink>
                </li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[1]}><img className="icon" src={Restaurants} alt="Restaurants" /><span className="custToolTip">Restaurants</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[2]}><img className="icon" src={vacations} alt="vacations" /><span className="custToolTip">vacations</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[3]}><img className="icon" src={electronics} alt="Electronics" /><span className="custToolTip">electronics</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[4]}><img className="icon" src={attractions} alt="Attractions" /><span className="custToolTip">attractions</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[5]}><img className="icon" src={books} alt="Books" /><span className="custToolTip">books</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[6]}><img className="icon" src={home} alt="Home" /><span className="custToolTip">home</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[7]}><img className="icon" src={garden} alt="Garden" /><span className="custToolTip">garden</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[8]}><img className="icon" src={pets} alt="Pets" /><span className="custToolTip">pets</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[9]}><img className="icon" src={clothing} alt="Clothing" /><span className="custToolTip">clothing</span></NavLink></li>
                <li className="custToolT"><NavLink to={"/customer/category/"+categoryType[10]}><img className="icon" src={games} alt="Games" /><span className="custToolTip">games</span></NavLink></li>
            </ul>


        </div>
    );
}

export default CustomerCategories;
