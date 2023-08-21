import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

function Form({ title, to, text, buttonText, linkText, children }) {
    const { signUp, signIn, loading } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (buttonText === 'Sign up') {
            signUp();
        } else if (buttonText === 'Sign in') {
            signIn();
        }
    }

    return (
        <form 
            className="w-full p-6 rounded-md md:w-96 lg:border lg:shadow-lg" 
            onSubmit={handleSubmit}
        >
            <div className="text-center mb-4">
                <h1 className="mt-4 mb-6 text-3xl">{title}</h1>
            </div>
            {children}
            <button
                className="w-full mt-2 h-10 bg-sky-500 text-white text-lg float-right border rounded hover:bg-sky-600"
            >
                {loading ? <Loading /> : buttonText}
            </button>
            <span className="inline-block mt-4 text-sm">
                {text}
                <Link className="ml-1 text-sky-500 font-semibold hover:underline hover:underline-offset-2" to={to}>
                    {linkText}
                </Link>
            </span>
        </form>
    );
}

export default Form;