import React, { forwardRef }from "react";
import { useGlobalContext } from "context/context";

export default function Pagination({ handleClick }) {
    const { totalPages, changePage, activePage } = useGlobalContext();

    let render = "";
    for (let page = 1; page <= totalPages; page++) {
        render += page;
    }

    const prevBtn = (
        <li>
            <button
                className="flex items-center justify-center px-4 h-10 ml-0 leading-tight hover:bg-gray-200"
                onClick={() => {
                    if (activePage >= 1) {
                        changePage(activePage - 1)
                        handleClick()
                    }
                }}
            >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 1 1 5l4 4" />
                </svg>
                <span className="ml-2">Previous</span>
            </button>
        </li>
    );

    const nextBtn = (
        <li>
            <button
                className="flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200"
                onClick={() => {
                    if (activePage < totalPages) {
                        changePage(activePage + 1)
                        handleClick()
                    }
                }}
            >
                <span className="mr-2">Next</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4" />
                </svg>
            </button>
        </li>
    );

    return (
        <nav className="lg:grid lg:grid-cols-6" aria-label="Page navigation example">
            <ul className="flex flex-wrap items-center justify-between -space-x-px h-10 text-base lg:col-span-4">
                {activePage !== 1 && prevBtn}
                {render.split("").map((page, index) => (
                    <li key={page}>
                        <button
                            value={page}
                            className={`flex items-center justify-center px-4 h-10 leading-tight hover:bg-gray-200 ${activePage === (index + 1) && "bg-sky-500 text-white hover:bg-sky-500"}`}
                            onClick={(e) => {
                                if (activePage === (index + 1)) return;
                                changePage(Number(e.target.value))
                                handleClick()
                            }}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                {nextBtn}
            </ul>
        </nav>
    );
}