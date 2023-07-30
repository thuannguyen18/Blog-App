import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

export default function Form({ 
    title, 
    to, 
    text, 
    buttonText,
    linkText, 
    children,
}) {
    const { signUpSubmit, signInSubmit, loading } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (buttonText === 'Sign up') {
            signUpSubmit();
        } else if (buttonText === 'Sign in') {
            signInSubmit();
        }
    }

    return (
        <form 
            className="w-full md:w-96 p-6 border md:shadow-lg" 
            onSubmit={handleSubmit}
        >
            <div className="text-center mb-4">
                <h1 className="text-3xl">{title}</h1>
            </div>
            {children}
            <button
                className="w-full mt-2 h-10 bg-sky-500 text-white text-lg float-right border rounded hover:bg-sky-600"
            >
                {loading ? <Loading /> : buttonText}
            </button>
            <span className="inline-block mt-2">
                {text}
                <Link className="ml-1 text-sky-500 font-semibold hover:underline hover:underline-offset-2" to={to}>
                    {linkText}
                </Link>
            </span>
        </form>
    );
}