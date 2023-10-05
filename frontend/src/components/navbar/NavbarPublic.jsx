import React from "react";
import { Link } from "react-router-dom";

export default function NavbarPublic() {
    return (
        <React.Fragment>
            <Link className="hidden ml-6 text-slate-900 md:block" to="/login">Log in</Link>
            <Link className="transition ml-6 w-[120px] text-center text-white bg-sky-500 py-2 px-4 rounded-full hover:bg-sky-600" to="/register">Sign up</Link>
        </React.Fragment>
    )
}