import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import { BsVectorPen, BsFillCaretDownFill } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { userInformation } from "constants";
import { useGlobalContext } from "context/context";
import UserAvatar from "components/user/UserAvatar";

export default function NavbarPrivate() {
    // Global State
    const { openEditorMode, editorMode, logout } = useGlobalContext();

    // Local State
    const [visible, setVisible] = useState(false);

    // Show & hide tippy
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    // Menu items
    const items = [
        {
            title: "Profile",
            icon: <ImProfile />,
            to: "/user/me/posts"
        },
        {
            title: "All my posts",
            icon: <HiOutlinePencilAlt />,
            to: "/user/me/posts"
        },
        {
            title: "Saved",
            icon: <BiBookmark />,
            to: "/user/me/saved"
        },
        {
            title: "Account settings",
            icon: <IoIosSettings />,
            to: "/user/settings"
        },
    ];

    return (
        <React.Fragment>
            {!editorMode &&
                <Link
                    onClick={openEditorMode}
                    className="transition ml-6 text-slate-900 flex items-center py-2 px-6 border rounded-full hover:bg-gray-200" to="/blog/editor"
                >
                    <span className="text-lg text-gray-650">
                        <BsVectorPen />
                    </span>
                    <span className="ml-2">Write blog</span>
                </Link>
            }
            <Tippy
                render={attrs => (
                    <div className="box w-72 shadow rounded bg-white border border-gray-200" tabIndex="-1" {...attrs}>
                        <div className="flex items-center p-4 h-[96px] w-full">
                            <UserAvatar width="w-12" height="h-12" rounded profilePicturePath={userInformation?.profilePicturePath} />
                            <div className="ml-2">
                                <span className="block font-semibold">{userInformation?.username}</span>
                                <span className="block ">@{userInformation?.email.replace("@gmail.com", "")}</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 p-2">
                            {items.map(item => (
                                <Link key={item.title} className="transition flex items-center h-14 py-2.5 px-2 rounded hover:bg-gray-150" to={item.to}>
                                    <span className="text-xl text-gray-650 mr-2">
                                        {item.icon}
                                    </span>
                                    <span className="text-black-150">{item.title}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 p-2">
                            <button
                                className="flex items-center h-14 py-2.5 px-2 rounded hover:bg-gray-150 w-full"
                                onClick={() => {
                                    logout();
                                    setVisible(false);
                                }}
                            >
                                <FiLogOut className="text-lg text-gray-650 mr-2" />
                                <span className="">Log out</span>
                            </button>
                        </div>
                    </div>
                )}
                interactive={true}
                visible={visible}
                onClickOutside={hide}
                placement="bottom-end"
            >
                <div
                    className="ml-1 text-slate-900 flex items-center cursor-pointer h-12 w-12 rounded-full"
                    onClick={visible ? hide : show}
                >
                    <UserAvatar
                        width="w-10"
                        height="h-10"
                        center
                        profilePicturePath={userInformation?.profilePicturePath}
                    />
                    <span className="text-xs">
                        <BsFillCaretDownFill />
                    </span>
                </div>
            </Tippy>
        </React.Fragment>
    );
}