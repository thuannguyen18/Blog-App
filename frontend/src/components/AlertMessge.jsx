import { useGlobalContext } from "context/context";

export default function AlertMessage() {
    const { message, closeAlertMessage, isSuccess } = useGlobalContext();

    let alert = "text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800";
    let alertBtn = "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200";

    if (isSuccess) {
        alert = "text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800";
        alertBtn = "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200";
    }

    return (
        <div id="alert-border-3" className={`w-full h-12 absolute top-0 right-0 left-0 flex items-center p-4 mb-4 ${alert}`} role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ml-3 text-sm font-medium">
                {message}
            </div>
            <button
                onClick={closeAlertMessage}
                type="button"
                className={`ml-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 ${alertBtn}`} data-dismiss-target="#alert-border-3" aria-label="Close"
            >
                <span className="sr-only">Dismiss</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>

    );
}