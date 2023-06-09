import Input from "../Input";
import { useGlobalContext } from "../../context/context";
import Loading from "../Loading";
import { useState } from "react";

function Settings() {
    const [avatar, setAvatar] = useState();

    const { 
        userName, 
        userEmail, 
        userPassword,
        setUserName, 
        setUserEmail,
        setUserPassword, 
        updateUser,
        uploadFile,
        loading
    } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser();
        if (avatar) {
            uploadFile(avatar?.preview);
        }
    }

    const handleFile = (e) => {
        const fileUpload = e.target.files[0];
        const previewUrl = URL.createObjectURL(fileUpload);

        fileUpload.preview = previewUrl;

        setAvatar(fileUpload);
    }
    
    const button = loading ? <Loading /> : "Update Settings";

    return (
        <div className="flex items-center justify-center mt-8">
            <form className="w-full px-4 lg:w-1/3 lg:px-0" onSubmit={handleSubmit}>
                <h1 className="text-4xl font-lg text-center mb-4">Your Settings</h1>
                <div>
                    <label className="text-2xl" htmlFor="avatar">Change Avatar: </label>
                    <input type="file" name="avatar" id="avatar" onChange={handleFile}/>
                    {avatar && <img src={avatar.preview} alt="avatar" />}
                </div>
                <Input type="text" placeholder="Username" value={userName} onChange={setUserName}/>
                <Input type="textarea" placeholder="Short bio about you"/>
                <Input type="email" placeholder="Email" value={userEmail} onChange={setUserEmail}/>
                <Input type="password" placeholder="New Password" value={userPassword} onChange={setUserPassword}/>
                <button className="w-full h-12 mt-4 bg-green-600 text-white text-xl float-right border rounded-lg">
                    {button}
                </button>
            </form>
        </div>
    );
}

export default Settings;