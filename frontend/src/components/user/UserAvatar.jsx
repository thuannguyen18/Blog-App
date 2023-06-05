import defaultAvatar from "../../assets/images/default.png";
import "../../App.css";
import { useGlobalContext } from "../../context/context";

function UserAvatar({ width = "2", height = "2", isProfile }) {
    const { userAvatar } = useGlobalContext();
    const classes = isProfile ? "user-profile" : "";

    const avatar = userAvatar ? userAvatar : defaultAvatar;

    console.log(userAvatar);

    return ( 
        <img
            className={`w-${width} h-${height} ${classes} cursor-pointer rounded-full`}
            src={avatar}
            alt="avatar"
        />
    );
}

export default UserAvatar;