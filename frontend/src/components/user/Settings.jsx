import Input from "../Input";
import { useGlobalContext } from "../../context/context";
import Loading from "../Loading";

function Settings() {
    const { 
        userName, 
        userEmail, 
        userPassword,
        setUserName, 
        setUserEmail,
        setUserPassword, 
        updateUser,
        loading
    } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser();
    }
    
    const button = loading ? <Loading /> : "Update Settings";

    return (
        <div className="flex items-center justify-center mt-8">
            <form className="w-full px-4 lg:w-1/3 lg:px-0" onSubmit={handleSubmit}>
                <h1 className="text-4xl font-lg text-center mb-4">Your Settings</h1>
                <Input type="text" placeholder="Username" value={userName} onChange={setUserName}/>
                <Input type="textarea" />
                <Input type="email" placeholder="Email" value={userEmail} onChange={setUserEmail}/>
                <Input type="password" placeholder="New Password" value={userPassword} onChange={setUserPassword}/>
                <button className="w-full h-12 mt-4 bg-gray-800 text-white text-xl float-right border rounded-lg">
                    {button}
                </button>
            </form>
        </div>
    );
}

export default Settings;