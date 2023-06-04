import defaultAvatar from "../../assets/images/default.png";
import "../../App.css"

function UserAvatar({ weight = "2", height = "2", isProfile }) {
    const classes = isProfile ? "user-profile" : "";
    return ( 
        <img
            className={`w-${weight} h-${height} ${classes} cursor-pointer rounded-full`}
            src={defaultAvatar}
            alt="avatar"
        />
    );
}

export default UserAvatar;