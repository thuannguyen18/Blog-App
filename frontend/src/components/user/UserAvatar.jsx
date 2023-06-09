import defaultAvatar from "../../assets/images/default.png";
import "../../App.css";
import { useGlobalContext } from "../../context/context";

function UserAvatar({ width = "w-2", height = "h-2", isProfile, isDefault, isOtherAvatar }) {
    const { userAvatar, otherUserAvatar } = useGlobalContext();

    const classes = isProfile ? "user-profile" : "";

    const avatar = (userAvatar && !isDefault) ? userAvatar : defaultAvatar;
    const otherAvatar = (otherUserAvatar && !isDefault) ? otherUserAvatar : defaultAvatar;

    return ( 
        <img
            className={`${width} ${height} ${classes} rounded-full`}
            src={!isOtherAvatar ? avatar : otherAvatar}
            alt="avatar"
        />
    );
}

export default UserAvatar;