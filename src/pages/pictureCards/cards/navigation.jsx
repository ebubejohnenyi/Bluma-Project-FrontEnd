import {Link} from "react-router-dom";
import "../cards/navigation.css";
function HeroNavigations(){
    return(
        <div className="navigations">
            <Link style={{textDecoration: 'none'}} to="#"><li>POST</li></Link>
            <Link style={{textDecoration: 'none'}} to="#"> <li>FEATURE</li></Link>
            <Link style={{textDecoration: 'none'}} to="#"><li>RECENT</li> </Link>
        </div>
    )
}
export default HeroNavigations;