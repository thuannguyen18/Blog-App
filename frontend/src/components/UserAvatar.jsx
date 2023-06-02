import defaultAvatar from "../assets/images/default.png";

function UserAvatar() {
    return (
        <div>
            <img 
                className="w-10 h-10"
                src={defaultAvatar} 
                alt="avatar" 
            />
        </div>
    );
}

export default UserAvatar;