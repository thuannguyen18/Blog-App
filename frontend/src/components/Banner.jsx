import bannerImage from "../assets/images/banner.jpg";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="relative pt-20">
            <div
                className="bg-local bg-no-repeat bg-contain bg-right h-[45vh] lg:h-[70vh]"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
            </div>
            <div className="h-96 absolute inset-y-[30%] lg:left-[12.5%] lg:w-1/3">
                <h2 className="text-xl md:text-4xl text-sky-600 font-bold">Title of A Longer Featured Blog Post</h2>
                <p className="md:text-lg font-semibold mt-6">
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                </p>
                <Link className="inline-block mt-8 w-40 px-4 py-2 text-center text-white text-lg rounded bg-sky-600" to="/login">
                    Create Blog
                </Link>
            </div>
        </div >
    );
}

