export default function Pagination() {
    return (
        <nav className="lg:grid lg:grid-cols-6" aria-label="Page navigation example">
            <ul className="flex flex-wrap items-center justify-between -space-x-px h-10 text-base lg:col-span-4">
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight hover:bg-gray-200">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="ml-2">Previous</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight bg-sky-500 text-white">1</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">2</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">3</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">4</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">5</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">6</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">7</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">8</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">9</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">10</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200">
                        <span className="mr-2">Next</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}