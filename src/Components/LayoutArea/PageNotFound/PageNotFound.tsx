import "./PageNotFound.css";
import pageNotFound from "../images/pageNotFound.png"

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound boxGlassLayer1">
			<h1>Page Not Found</h1>
            <img className="pageNotFoundImg" src={pageNotFound} alt="pageNotFound" />
        </div>
    );
}

export default PageNotFound;
