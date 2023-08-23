import React, { useState } from "react";
import Container from "components/Container";
import { AiOutlineCamera } from "react-icons/ai";
import { useGlobalContext } from "context/context";

export default function Settings() {
    const {
        userId,
        userAvatar,
        userNameUpdate,
        userEmailUpdate,
        setUserName,
        setUserEmail,
        setUserAvatar,
        isChange,
        setDefault,
        updateUser
    } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);
    const [avatar, setAvatar] = useState();

    console.log(userNameUpdate)
    console.log(userEmailUpdate)

    const options = [
        {
            id: "username",
            htmlFor: "username",
            value: userNameUpdate,
            type: "text",
            onChange: setUserName,
        },
        {
            id: "email",
            htmlFor: "email",
            value: userEmailUpdate,
            type: "email",
            onChange: setUserEmail,
        },
    ];


    const passwords = [
        {
            id: "password",
            htmlFor: "password",
            placeholder: "**********",
            type: "password",
        },
        {
            id: "new password",
            htmlFor: "new password",
            placeholder: "**********",
            type: "password",
        },
        {
            id: "confirm new password",
            htmlFor: "confirm new password",
            placeholder: "**********",
            type: "password",
        },
    ];

    const handleFile = (e) => {
        const fileUpload = e.target.files[0];
        console.log(fileUpload)
        const previewUrl = URL.createObjectURL(fileUpload);

        fileUpload.preview = previewUrl;
        setUserAvatar(fileUpload);
    }

    const disableStyle = isChange ? "bg-sky-500" : "bg-sky-300 cursor-not-allowed";


    return (
        <Container>
            <div className="mx-auto mt-10 md:w-[720px] overflow-hidden p-8">
                <div className="flex items-center justify-center w-32 h-32">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center rounded-full justify-center w-full h-full border-2 border-gray-300 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        {!userAvatar && <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <AiOutlineCamera className="w-12 h-12 text-gray-300" />
                        </div>}
                        {userAvatar && <img className="w-full h-full object-cover rounded-full" src={userAvatar.preview} alt="avatar" />}
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFile} />
                    </label>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-6 mt-12">
                    {options.map(option => (
                        <div key={option.id} className="col-span-1">
                            <label
                                htmlFor={option.htmlFor}
                                className="block text-xs uppercase font-semibold mb-1 text-gray-600"
                            >
                                {option.id}
                            </label>
                            <input
                                value={option.value}
                                type={option.type}
                                id={option.id}
                                onChange={(e) => option.onChange(e.target.value)}
                                className="w-full h-12 py-2 px-3 bg-gray-350 border border-gray-300 rounded outline-none focus:bg-white mb-4"
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="h-12 w-full border border-gray-200 rounded my-5 hover:bg-gray-350"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Change password
                </button>
                {isOpen && <React.Fragment>
                    {passwords.map(password => (
                        <div key={password.id} className="mt-3">
                            <label className="block text-xs uppercase font-semibold mb-1 text-gray-600" htmlFor={password.htmlFor}>{password.id}</label>
                            <input className="w-full h-12 py-2 px-3 bg-gray-350 border border-gray-300 rounded outline-none focus:bg-white mb-4" placeholder={password.placeholder} type={password.type} id={password.id} />
                        </div>
                    ))}
                    <button type="button" className="w-full text-white bg-sky-300 dark:bg-sky-500 cursor-not-allowed rounded-full px-5 py-2.5 text-center" disabled>Change</button>
                </React.Fragment>}
                <div className="flex flex-row-reverse py-6">
                    <button
                        type="button"
                        className={`text-white h-10 px-6 rounded-full ml-2 ${disableStyle}`}
                        onClick={updateUser}
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="h-10 px-6 rounded-full shadow border hover:bg-gray-200"
                        onClick={setDefault}
                    >
                        Cancel
                    </button>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <button className="h-12 w-full border border-gray-200 rounded mt-5 bg-red-300 text-white">
                        Delete account
                    </button>
                </div>
            </div>
        </Container>
    );
}