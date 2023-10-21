import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "context/context";

export default function SearchBar({ handleBack }) {
    const navigate = useNavigate();

    // Global State
    const { getResults } = useGlobalContext();
    
    // Local State
    const [query, setQuery] = useState("");

    // Search 
    const handleSearch = () => {
        getResults(query);
        navigate("/search");
        handleBack();
    }

    // Input value
    const handleChange = (e) => {
        setQuery(e.target.value);
        localStorage.setItem("query", e.target.value);
    }

    return (
        <div className="w-full h-[48px] bg-gray-350 rounded px-4 flex items-center">
            <button className="text-xl" onClick={handleBack}>
                <HiArrowLeft />
            </button>
            <input
                value={query}
                className="h-full w-full outline-none bg-transparent p-2 placeholder:text-sm"
                type="text"
                placeholder="Search for blog, author, categories..."
                onChange={handleChange}
            />
            <button className="text-lg" onClick={handleSearch}>
                <AiOutlineSearch />
            </button>
        </div>
    );
}