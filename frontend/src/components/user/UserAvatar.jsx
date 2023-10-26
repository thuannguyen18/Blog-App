import defaultAvatarPath from "assets/images/default-avatar.webp";
import "../../App.css";

function UserAvatar({
    width = "w-2",
    height = "h-2",
    center,
    rounded,
    profilePicturePath
}) {
    const picturePath = profilePicturePath ? `${process.env.REACT_APP_BASE_URL}/assets/${profilePicturePath}` : null;

    return (
        <img
            className={`
                ${width}
                ${height} 
                ${center && "mx-auto"} 
                ${rounded && "rounded"}
                ${!rounded && "rounded-full"}
                object-cover
                border
                border-gray-350
            `}
            src={picturePath || defaultAvatarPath}
            alt="avatar"
        />
    );
}

export default UserAvatar;