export default function UserInfoPlaceholder() {
    return (
        <div role="status" className="border border-gray-200 rounded shadow animate-pulse lg:col-span-1 md:border md:border-gray-200 p-4 md:rounded md:shadow-lg max-h-[355px]">
            <div className="flex items-center justify-center h-48 rounded">
                <svg className="w-36 h-36 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
            </div>
            <div className="flex flex-col items-center justify-around h-8">
                <div className="h-3 bg-gray-200 rounded-full w-20"></div>
                <div className="h-3 bg-gray-200 rounded-full w-32"></div>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="h-3 bg-gray-200 rounded-full w-10 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-12"></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-3 bg-gray-200 rounded-full w-10 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-12"></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-3 bg-gray-200 rounded-full w-10 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-12"></div>
                </div>
            </div>
            <div className="h-10 bg-gray-200 rounded w-full mt-3"></div>
        </div>
    );
}