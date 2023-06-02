import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../../NavBarArea/NavBar/NavBar";
import "./Layout.css";
import Routing from "../Routing/Routing";
import Menu from "../Menu/Menu";
import CompanyCategories from "../../NavBarArea/Categories/CompanyCategories";
import { useEffect, useState } from "react";
import { AdminAuthStore } from "../../../Redux/AdminAuthState";
import { CompanyAuthStore } from "../../../Redux/CompanyAuthState";
import { CustomerAuthStore } from "../../../Redux/CustomerAuthState";
import { AdminTokModel } from "../../../Models/AdminTokModel";
import notificationService from "../../../Services/NotificationService";

function Layout(): JSX.Element {

    const [userType, setUserType] = useState<AdminTokModel>();

    useEffect(()=>{
        setUserType(AdminAuthStore.getState().user)
       
    },[userType])

    return (
        <div className="Layout">
            <header >
                <Header />
            </header>
			<nav className="navBar">
                <NavBar />
            </nav>
            <main className="layoutMain">
                <Menu />
                <Routing />
                {/* <br /> - solve the problem where admin main div overlap with footer div */}
            </main><br />
            
            <footer className="footer">
                <Footer />
            </footer>
            
        </div>
    );
}

export default Layout;
