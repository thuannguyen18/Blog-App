import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function Form({ title, to, link, buttonText, children }) {
    const { signUpSubmit, signInSubmit } = useGlobalContext();

    const handleSubmit = (e) => { 
        e.preventDefault();
        if (buttonText === 'Sign up') {
            signUpSubmit();
        } else if (buttonText === 'Sign in') {
            signInSubmit();
        }
    }


    return (
        <form className="w-full lg:w-1/2 p-6" onSubmit={handleSubmit}>
            <div className="text-center mb-2">
                <h1 className="text-4xl mb-3">{title}</h1>
                <Link className="text-base hover:underline-offset-8" to={to}>{link}</Link>
            </div>
            {children}
            <button
                className="w-full h-12 lg:w-28 mt-4 bg-gray-700 text-white text-xl float-right border rounded"
            >
                {buttonText}
            </button>
        </form>
    );
}

export default Form;