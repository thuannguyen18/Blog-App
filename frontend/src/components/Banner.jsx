import bannerImage from "../assets/images/banner.avif";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="mt-12 shadow relative">
            <div
                className="bg-local bg-no-repeat bg-cover bg-center h-[40vh] brightness-75"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
            </div>
            <div className="absolute xl:w-1/2 inset-y-10 px-10">
                <h2 className="text-xl lg:text-4xl 2xl:text-5xl text-white leading-tight">Title of A Longer Featured Blog Post</h2>
                <p className="text lg:text-xl 2xl:text-2xl text-white leading-tight mt-6">
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                </p>
                <Link className="inline-block mt-8 w-40 border border-white px-4 py-2 text-center text-white text-lg rounded hover:bg-sky-600" to="/login">
                    Create Blog
                </Link>
            </div>
        </div >
    );
}

export default Banner;