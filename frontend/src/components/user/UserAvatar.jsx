import defaultAvatar from "../../assets/images/default.png";
import "../../App.css";
import { useGlobalContext } from "../../context/context";

function UserAvatar({ width = "w-2", height = "h-2", isProfile }) {
    const { userAvatar } = useGlobalContext();

    const classes = isProfile ? "user-profile" : "";

    const avatar = userAvatar ? userAvatar : defaultAvatar;

    return ( 
        <img
            className={`${width} ${height} ${classes} rounded-full`}
            src={avatar}
            alt="avatar"
        />
    );
}

export default UserAvatar;