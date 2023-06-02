import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi"
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { useGlobalContext } from "../context/context";
import UserAvatar from "./UserAvatar";

function Header() {
    const { isAuthenticated, username, userEmail, logout } = useGlobalContext();
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const navbarPublic = (
        <>
            <Link className="ml-6 text-slate-100" to="/">Home</Link>
            <Link className="ml-6 text-slate-100" to="/login">Sign in</Link>
            <Link className="ml-6 text-slate-100" to="/register">Sign up</Link>
        </>
    );

    const navbarPrivate = (
        <>

            <Link className="ml-6 text-slate-100 flex items-center" to="/">
                <BsPencilSquare className="text-xl" />
                <span className="ml-2">Write</span>
            </Link>
            <Tippy
                render={attrs => (
                    <div className="box w-80 shadow-3xl rounded-xl p-2.5" tabIndex="-1" {...attrs}>
                        <Link className="flex items-center h-14 px-1 rounded-xl hover:bg-zinc-100" to="/user">
                            <UserAvatar />
                            <span className="ml-1 text-lg font-semibold">{username}</span>
                        </Link>
                        <Link className="flex items-center h-14 mt-2.5 px-1 rounded-xl hover:bg-zinc-100" to="/settings">
                            <FiSettings className="text-2xl" />
                            <span className="ml-2 font-semibold">Settings</span>
                        </Link>
                        <button
                            className="flex items-center h-14 mt-2.5 px-1 rounded-xl hover:bg-zinc-100 w-full"
                            onClick={() => {
                                logout();
                                setVisible(false);
                            }}
                        >
                            <FiLogOut className="text-2xl" />
                            <span className="ml-2 font-semibold">Log Out</span>
                        </button>
                    </div>
                )}
                interactive={true}
                visible={visible}
                onClickOutside={hide}
                placement="bottom-start"
            >
                <div
                    className="ml-6 text-slate-100 flex items-center cursor-pointer"
                    onClick={visible ? hide : show}
                >
                    <UserAvatar />
                </div>
            </Tippy>
        </>
    );

    const navbar = isAuthenticated ? navbarPrivate : navbarPublic;

    return (
        <header className="h-16 bg-gray-800 px-5">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="">
                    <Link className="text-slate-100 text-2xl" to="/">MyBlog</Link>
                </div>
                <nav className="flex items-center">
                    {navbar}
                </nav>
            </div>
        </header>
    );
}

export default Header;