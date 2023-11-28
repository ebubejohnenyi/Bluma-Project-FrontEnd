import bell from "../../assets/notifcations 1.svg";
import profile from "../../assets/profile.svg";
import { NotifImag } from "./style";
import "./style.css";
function NavSectionThree() {
  return (
    <div className="nav-notification">
      <NotifImag src={bell} alt="notification bell" />
      <NotifImag src={profile} alt="profile image" />
    </div>
  );
}

export default NavSectionThree;
