import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES as categories } from "constants";

export default function Category() {
    return (
        <React.Fragment>
            <h2 className="font-semibold pt-5 text-sm lg:text-base uppercase">Categories</h2>
            <div className="flex flex-wrap mt-4">
                {categories.map((category, index) => (
                    <Link 
                        to={`/category/${category}`} 
                        key={index} 
                        className="border border-slate-300 rounded-full py-2 px-4 mr-2 mb-3 lg:h-10"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </React.Fragment>
    );
}