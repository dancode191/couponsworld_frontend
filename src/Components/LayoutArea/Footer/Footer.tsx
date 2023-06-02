import "./Footer.css";
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import youtube from "../images/youtube.png"




function Footer(): JSX.Element {
    return (
        <div className="Footer boxGlassLayer1">
			<div className="mediaContact">
                <a href="https://twitter.com/" target="_blank"><img className="mediaImg" src={twitter} alt="twitter" /></a>
                <a href="https://www.instagram.com/" target="_blank"><img className="mediaImg" src={instagram} alt="instagram" /></a>
                <a href="https://www.facebook.com/" target="_blank"><img className="mediaImg" src={facebook} alt="facebook" /></a>
                <a href="https://www.youtube.com/" target="_blank"><img className="mediaImg" src={youtube} alt="youtube" /></a>
            </div>
            <div className="webCreator">
                <p>Daniel Malka</p>
            </div>
        </div>
    );
}

export default Footer;
