import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FiSettings, FiLogOut } from "react-icons/fi"
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { useGlobalContext } from "context/context";
import UserAvatar from "components/user/UserAvatar";
import Container from "components/Container";

export default function Header() {
    const { isAuthenticated, userName, logout } = useGlobalContext();
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const navbarPublic = (
        <>
            <Link className="hidden ml-6 text-slate-900 lg:text-lg md:block" to="/login">
                Contact
            </Link>
            <Link className="hidden ml-6 text-slate-900 lg:text-lg md:block" to="/login">
                Log in
            </Link>
            <Link
                className="lg:text-lg ml-6 text-white bg-sky-500 py-2 px-4 rounded-full hover:bg-sky-600"
                to="/register"
            >
                Create Account
            </Link>
        </>
    );

    const navbarPrivate = (
        <>
            <Link className="ml-6 text-slate-900 flex items-center" to="/blogs">
                <CgNotes className="text-lg" />
                <span className="ml-2">Blogs</span>
            </Link>
            <Link className="ml-6 text-slate-900 flex items-center" to="/editor">
                <BsPencilSquare className="text-lg" />
                <span className="ml-2">New Article</span>
            </Link>
            <Tippy
                render={attrs => (
                    <div className="box w-80 shadow-3xl rounded-xl p-2.5 bg-white" tabIndex="-1" {...attrs}>
                        <Link className="flex items-center h-14 px-2 rounded-xl hover:bg-zinc-100" to="/user">
                            <UserAvatar width="w-12" height="h-12" />
                            <span className="ml-1 text-lg font-semibold">{userName}</span>
                        </Link>
                        <Link className="flex items-center h-14 mt-2.5 px-2 rounded-xl hover:bg-zinc-100" to="/settings">
                            <FiSettings className="text-2xl mr-2" />
                            <span className="font-semibold">Settings</span>
                        </Link>
                        <button
                            className="flex items-center h-14 mt-2.5 px-2 rounded-xl hover:bg-zinc-100 w-full"
                            onClick={() => {
                                logout();
                                setVisible(false);
                            }}
                        >
                            <FiLogOut className="text-2xl mr-2" />
                            <span className="font-semibold">Log Out</span>
                        </button>
                    </div>
                )}
                interactive={true}
                visible={visible}
                onClickOutside={hide}
                placement="bottom-start"
            >
                <div
                    className="ml-6 text-slate-900 flex items-center cursor-pointer"
                    onClick={visible ? hide : show}
                >
                    <UserAvatar width="w-12" height="h-12" />
                </div>
            </Tippy>
        </>
    );

    const navbar = isAuthenticated ? navbarPrivate : navbarPublic;

    return (
        <React.Fragment>
            <header className="h-20 shadow-lg bg-white z-50 relative">
                <Container styles={"flex justify-between items-center h-full"}>
                    <Link className="text-sky-700 text-3xl font-normal" to="/">MyBlog</Link>
                    <nav className="flex items-center">
                        {navbar}
                    </nav>
                </Container>
            </header>
            <Outlet />
        </React.Fragment>
    );
}