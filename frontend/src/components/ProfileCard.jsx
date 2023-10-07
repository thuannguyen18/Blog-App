import React, { useState } from "react";
import UserAvatar from "components/user/UserAvatar";

export default function ProfileCard({
    name,
    email,
    profilePicturePath,
    isFollowing,
    handleFollow,
    profileInfoStats
}) {    
    // Local State
    const [active, setActive] = useState(isFollowing);

    const handleClick = () => {
        handleFollow();
        setActive(!active);
    }

    return (
        <div className="lg:col-span-1 md:border md:border-gray-200 p-4 md:rounded md:shadow-lg max-h-[355px]">
            <div className="mx-auto">
                <UserAvatar
                    center
                    width="w-28 lg:w-36"
                    height="h-28 lg:h-36"
                    profilePicturePath={profilePicturePath}
                />
            </div>
            <div className="text-center">
                <h3 className="text-lg font-bold mt-2">{name}</h3>
                <p className="text-sm">{email}</p>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-8 text-center">
                {profileInfoStats.map(({ id, stats, info }) => (
                    <div className="col-span-1" key={id}>
                        <span className="block font-bold">{stats}</span>
                        <span className="text-sm">{info}</span>
                    </div>
                ))}
            </div>
            <button 
                className="mt-4 p-1 w-full bg-sky-100 h-10 text-sky-500" 
                onClick={handleClick}
            >
                {active ? "Following": "Follow"}
            </button>
        </div>
    );
}