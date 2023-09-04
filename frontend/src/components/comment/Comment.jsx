import React from "react";
import UserInfo from "components/user/UserInfo";

export default function Comment({ content, userInfo }) {
    const { username, email, profilePicturePath } = userInfo;

    return (
        <React.Fragment>
            <UserInfo 
                name={username}
                email={email}
                profilePath={profilePicturePath}
            />
            <div className="px-2 mt-2 mb-10">
                {content}
            </div>
        </React.Fragment>
    );
}