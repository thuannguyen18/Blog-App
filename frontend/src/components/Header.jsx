import React from "react";
import { Link } from "react-router-dom";
import { token } from "constants";
import Container from "components/Container";
import NavbarPublic from "components/navbar/NavbarPublic";
import NavbarPrivate from "components/navbar/NavbarPrivate";

export default function Header() {
    return (
        <header className="h-[69px] shadow-8xl bg-white z-10 relative">
            <Container styles={"flex justify-between items-center h-full"}>
                <Link className="text-sky-700 text-2xl md:text-3xl font-normal" to="/">MyBlog</Link>
                <nav className="flex items-center">
                    {token ? <NavbarPrivate /> : <NavbarPublic />}
                </nav>
            </Container>
        </header>
    );
}