import { Link } from "react-router-dom";
import './BreadCrumbButton.css';


interface Props {
    buttonName: string;
    linkRoute: string;
}


const BreadCrumbButton = ({buttonName, linkRoute}: Props) => {

    return(
        <main className="MainBreadCrumbContainer">
                <Link to={linkRoute} className="CrumbLink"><button className="BreadCrumbButton">{buttonName}</button></Link>
        </main>
    )
}


export default BreadCrumbButton;