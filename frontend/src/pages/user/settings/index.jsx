import React, { useState } from "react";
import Container from "components/Container";
import { AiOutlineCamera } from "react-icons/ai";
import Input from "components/Input";

export default function Settings() {
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        {
            id: "username",
            htmlFor: "username",
            value: "Nguyen Huynh Minh Thuan",
            type: "text",
        },
        {
            id: "email",
            htmlFor: "email",
            value: "nguyenmthuan18@gmail.com",
            type: "email",
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
    ]

    return (
        <Container>
            <div className="mx-auto mt-10 md:w-[720px] overflow-hidden p-8">
                <div className="w-32 h-32 bg-gray-400 rounded-full">
                    <div className="w-full h-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
                        <AiOutlineCamera className="w-12 h-12 text-gray-300" />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-6 mt-12">
                    {options.map(option => (
                        <div key={option.id} className="col-span-1">
                            <label className="block text-xs uppercase font-semibold mb-1 text-gray-600" htmlFor={option.htmlFor}>{option.id}</label>
                            <input className="w-full h-12 py-2 px-3 bg-gray-350 border border-gray-300 rounded outline-none focus:bg-white mb-4" value={option.value} type={option.type} id={option.id} />
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
                    <button className="w-full h-10 rounded-full bg-sky-500 text-white hover:bg-sky-600">Change</button>
                </React.Fragment>}
                <div className="flex flex-row-reverse py-6">
                    <button className="bg-sky-500 text-white rounded-full h-10 px-6 ml-3">Update</button>
                    <button className="h-10 px-6 rounded-full shadow border hover:bg-gray-200">Cancel</button>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <button className="h-12 w-full border border-gray-200 rounded mt-5 bg-red-500 text-white">
                        Delete account
                    </button>
                </div>
            </div>
        </Container>
    );
}