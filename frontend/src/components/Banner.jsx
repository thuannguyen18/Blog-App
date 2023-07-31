import { Link } from "react-router-dom";
import bannerImage from "../assets/images/banner.jpg";

export default function Banner() {
    return (
        <div className="pt-20">
            <div
                className="relative  bg-local bg-no-repeat bg-contain bg-right h-[45vh] lg:h-[70vh]"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
            </div>
            <div className="h-96 absolute inset-y-[15%] w-full pl-4 md:w-1/2 xl:inset-y-[30%] xl:left-[10%] xl:text-left xl:w-1/3">
                <h2 className="text-xl md:text-4xl text-sky-600 font-bold">Title of A Longer Featured Blog Post</h2>
                <p className="text-sm md:text-lg font-semibold mt-6">
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                </p>
                <Link className="inline-block mt-4 w-30 px-4 py-2 text-sky-600 text-center border border-sky-600 rounded md:w-40 md:text-lg hover:text-white hover:bg-sky-600" to="/login">
                    Create Blog
                </Link>
            </div>
        </div >
    );
}

