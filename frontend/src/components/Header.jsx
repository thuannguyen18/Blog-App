import React, { useState } from "react";
import Container from "components/Container";
import Navbar from "./navbar/Navbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { useGlobalContext } from "context/context";

export default function Header() {
    // Global State
    const { editorMode } = useGlobalContext();

    // Local State
    const [isSearch, setIsSearch] = useState(false);

    // Check if user in editor then hide box shadow 
    const boxShadow = !editorMode && "shadow-8xl";

    // Search
    const handleBack = () => {
        setIsSearch(!isSearch);
    }

    return (
        <header className={`h-[69px] bg-white z-10 relative ${boxShadow}`}>
            <Container styles={"flex justify-between items-center h-full"}>
                {!isSearch && <>
                    <Logo />
                    <Navbar handleBack={handleBack} editorMode={editorMode} />
                </>}
                {isSearch && <SearchBar handleBack={handleBack} />}
            </Container>
        </header>
    );
}