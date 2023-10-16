import { AiOutlineSearch } from "react-icons/ai";
import NavbarPublic from "components/navbar/NavbarPublic";
import NavbarPrivate from "components/navbar/NavbarPrivate";
import { token } from "constants";

export default function Navbar({ handleBack }) {
    return (
        <nav className="flex items-center">
            <button
                className="w-[40px] h-[40px] text-2xl flex items-center justify-center text-gray-650 hover:bg-gray-100 transition"
                onClick={handleBack}
            >
                <AiOutlineSearch />
            </button>
            {token ? <NavbarPrivate /> : <NavbarPublic />}
        </nav>
    );
}