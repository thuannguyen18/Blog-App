import React from "react";
import { Link } from "react-router-dom";
import { token } from "constants";
import Container from "components/Container";
import NavbarPublic from "components/navbar/NavbarPublic";
import NavbarPrivate from "components/navbar/NavbarPrivate";
import { useGlobalContext } from "context/context";

export default function Header() {
    // Global State
    const { editorMode } = useGlobalContext();

    // Check if user in editor then hide box shadow 
    const boxShadow = !editorMode && "shadow-8xl";

    return (
        <header className={`h-[69px] bg-white z-10 relative ${boxShadow}`}>
            <Container styles={"flex justify-between items-center h-full"}>
                <Link className="text-sky-700 text-2xl md:text-3xl font-normal" to="/">MyBlog</Link>
                <nav className="flex items-center">
                    {token ? <NavbarPrivate /> : <NavbarPublic />}
                </nav>
            </Container>
        </header>
    );
}