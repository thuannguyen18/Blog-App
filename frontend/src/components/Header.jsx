import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function Header() {
    const { isAuthenticated, username, userEmail } = useGlobalContext();

    const navbarPublic = (
        <>
            <Link className="ml-6 text-slate-100" to="/login">Sign in</Link>
            <Link className="ml-6 text-slate-100" to="/register">Sign up</Link>
        </>
    );

    const navbarPrivate = (
        <>

            <Link className="ml-6 text-slate-100" to="/">Write</Link>
            <Link className="ml-6 text-slate-100" to="/">User: {username} & {userEmail}</Link>
        </>
    );

    const navbar = isAuthenticated ? navbarPrivate : navbarPublic;

    return (
        <header className="h-16 bg-gray-800 px-5">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="">
                    <Link className="text-slate-100 text-2xl" to="/">MyBlog</Link>
                </div>
                <nav className="">
                    <Link className="ml-6 text-slate-100" to="/">Home</Link>
                    {navbar}
                </nav>
            </div>
        </header>
    );
}

export default Header;