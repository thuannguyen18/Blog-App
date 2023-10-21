import React, { useState, useEffect } from "react";
import { FaUserAlt, FaFileAlt } from "react-icons/fa";
import { HiOutlineHashtag } from "react-icons/hi";
import { useGlobalContext } from "context/context";
import Container from "components/Container";
import SearchArticle from "components/article/SearchArticle";
import UserSearchResult from "components/UserSearchResult";

export default function Search() {
    // Global State
    const { getResults, results, userResults, titleSearch } = useGlobalContext();

    // Local State
    const [isPosts, setIsPosts] = useState(true);
    const [isAuthors, setIsAuthors] = useState(false);
    const [isCategories, setIsCategories] = useState(false);

    // Tab buttons
    const buttons = [
        {
            title: "Posts",
            icon: <FaFileAlt className="text-sm md:text-lg" />,
            isActive: isPosts && "border-b-4 border-sky-500 text-sky-500",
        },
        {
            title: "Authors",
            icon: <FaUserAlt className="text-sm md:text-base" />,
            isActive: isAuthors && "border-b-4 border-sky-500 text-sky-500",
        },
        {
            title: "Categories",
            icon: <HiOutlineHashtag className="text-sm md:text-xl" />,
            isActive: isCategories && "border-b-4 border-sky-500 text-sky-500",
        },
    ];

    // Change tab
    const handleChange = (e) => {
        const button = e.target.closest("button");

        switch (button.name) {
            case "Posts":
                setIsPosts(true);
                setIsAuthors(false);
                setIsCategories(false);
                break;
            case "Authors":
                setIsPosts(false);
                setIsAuthors(true);
                setIsCategories(false);
                break;
            case "Categories":
                setIsPosts(false);
                setIsAuthors(false);
                setIsCategories(true);
                break;
        }
    }

    const result = results.length < 1 ?
        <p className="pt-8 font-semibold text-center">Not getting any results</p> :
        results.map(result => (
            <SearchArticle key={result._id} result={result} />
        ));

    const userResult =
        <div className="grid grid-cols-1 md:grid-cols-2">
            {userResults.length < 1 ? <p className="pt-8 font-semibold text-center md:col-span-2">Not getting any results</p> :
                userResults.map(result => (
                    <UserSearchResult key={result._id} result={result} />
                ))
            }
        </div>

    // Get results
    useEffect(() => {
        if (isAuthors) {
            getResults(localStorage.getItem("query"), "author");
            return;
        }
        
        if (isCategories) {
            getResults(localStorage.getItem("query"), "category");
            return;
        }

        getResults(localStorage.getItem("query"));
    }, [isPosts, isAuthors, isCategories]);
    
    return (
        <Container styles="flex flex-col items-center">
            <span className="text-black-150 font-semibold text-3xl my-8 block align-center">Search result: "{titleSearch}"</span>
            <div className="w-full md:w-[766px] border border-gray-850 rounded py-1 px-2 md:p-8">
                <div className="h-[57px] w-full border-b border-slate-200 grid grid-cols-3">
                    {buttons.map(btn => (
                        <button
                            name={btn.title}
                            key={btn.title}
                            className={`text-black-150 font-bold h-14 col-span-1 flex items-center justify-center ${btn.isActive}`}
                            onClick={handleChange}
                        >
                            {btn.icon}
                            <span className="hidden ml-3 md:block">{btn.title}</span>
                        </button>
                    ))}
                </div>
                <div className="">
                    {(isPosts || isCategories) ? result : userResult}
                </div>
            </div>
        </Container >
    );
}