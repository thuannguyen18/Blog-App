import defaultAvatar from "assets/images/default-avatar.webp";
import "../../App.css";
import { useGlobalContext } from "context/context";

function UserAvatar({ width = "w-2", height = "h-2", isProfile, center, isOtherAvatar, profilePicturePath }) {
    const { userAvatar, otherUserAvatar } = useGlobalContext();
    const classes = isProfile ? "user-profile" : "";

    return ( 
        <img
            className={`${width} ${height} ${classes} ${center && "mx-auto"} rounded-full object-cover`}
            src={`http://localhost:3500/assets/${profilePicturePath}` || defaultAvatar}
            alt="avatar"
        />
    );
}

export default UserAvatar;