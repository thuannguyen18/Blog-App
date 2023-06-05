import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

function Form({ title, to, link, buttonText, children }) {
    const { signUpSubmit, signInSubmit, loading } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (buttonText === 'Sign up') {
            signUpSubmit();
        } else if (buttonText === 'Sign in') {
            signInSubmit();
        }
    }

    const button = loading ? <Loading /> : buttonText;

    return (
        <form className="w-full lg:w-1/2 xl:w-2/5 p-6" onSubmit={handleSubmit}>
            <div className="text-center mb-2">
                <h1 className="text-4xl mb-3">{title}</h1>
                <Link className="text-base hover:underline hover:underline-offset-2" to={to}>{link}</Link>
            </div>
            {children}
            <button
                className="w-full h-12 lg:w-28 mt-4 bg-gray-800 text-white text-xl float-right border rounded-lg"
            >
                {button}
            </button>
        </form>
    );
}

export default Form;