import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { useGlobalContext } from "context/context";
import UserAvatar from "components/user/UserAvatar";
import Container from "components/Container";

export default function Header() {
    const token = localStorage.getItem("access_token");
    const userInformation = JSON.parse(localStorage.getItem("user_information"));

    const { logout } = useGlobalContext();

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const navbarPublic = (
        <React.Fragment>
            <Link className="hidden ml-6 text-slate-900 md:block" to="/login">
                Contact
            </Link>
            <Link className="hidden ml-6 text-slate-900 md:block" to="/login">
                Log in
            </Link>
            <Link
                className="ml-6 w-[120px] text-center text-white bg-sky-500 py-2 px-4 rounded-full hover:bg-sky-600"
                to="/register"
            >
                Sign up
            </Link>
        </React.Fragment>
    );

    const navbarPrivate = (
        <React.Fragment>
            <Link className="ml-6 text-slate-900 flex items-center" to="/blogs">
                <CgNotes className="text-lg" />
                <span className="ml-2">Blogs</span>
            </Link>
            <Link className="ml-6 text-slate-900 flex items-center" to="/blog/editor">
                <BsPencilSquare className="text-lg" />
                <span className="ml-2">New Article</span>
            </Link>
            <Tippy
                render={attrs => (
                    <div className="box w-72 shadow rounded bg-white border border-gray-200" tabIndex="-1" {...attrs}>
                        <div className="flex items-center p-4 h-[96px] w-full">
                            <UserAvatar width="w-12" height="h-12" rounded profilePicturePath={userInformation?.profilePicturePath} />
                            <div className="ml-2">
                                <span className="block font-semibold">{userInformation?.username}</span>
                                <span className="block ">@{userInformation?.email}</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 p-2">
                            <Link className="flex items-center h-14 py-2.5 px-2 rounded hover:bg-gray-100" to="/user">
                                <ImProfile className="text-xl mr-2" />
                                <span className="text-gray-700">Profile</span>
                            </Link>
                            <Link className="flex items-center h-14 py-2.5 px-2 rounded hover:bg-gray-100" to="/user">
                                <BsPencilSquare className="text-xl mr-2" />
                                <span className="text-gray-700">All my posts</span>
                            </Link>
                            <Link className="flex items-center h-14 py-2.5 px-2 rounded hover:bg-gray-100" to="">
                                <BiBookmark className="text-2xl relative left-[-1px] mr-1" />
                                <span className="text-gray-700">Saved</span>
                            </Link>
                            <Link className="flex items-center h-14 py-2.5 px-2 rounded hover:bg-gray-100" to="/user/settings">
                                <IoIosSettings className="text-2xl mr-1" />
                                <span className="text-gray-700">Account settings</span>
                            </Link>
                        </div>
                        <div className="border-t border-gray-200 p-2">
                            <button
                                className="flex items-center h-14 py-2.5 px-2 rounded hover:bg-gray-100 w-full"
                                onClick={() => {
                                    logout();
                                    setVisible(false);
                                }}
                            >
                                <FiLogOut className="text-xl mr-2" />
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
                    className="ml-6 text-slate-900 flex items-center cursor-pointer bg-gray-200 h-12 w-12 rounded-full"
                    onClick={visible ? hide : show}
                >
                    <UserAvatar
                        width="w-10"
                        height="h-10"
                        center
                        profilePicturePath={userInformation?.profilePicturePath}
                    />
                </div>
            </Tippy>
        </React.Fragment>
    );

    const navbar = token ? navbarPrivate : navbarPublic;

    return (
        <React.Fragment>
            <header className="h-[69px] shadow-8xl bg-white z-10 relative">
                <Container styles={"flex justify-between items-center h-full"}>
                    <Link className="text-sky-700 text-2xl md:text-3xl font-normal" to="/">MyBlog</Link>
                    <nav className="flex items-center">
                        {navbar}
                    </nav>
                </Container>
            </header>
            <Outlet />
            <footer>
                <Container styles={"flex justify-between items-center h-full"}>
                    Footer
                </Container>
            </footer>
        </React.Fragment>
    );
}