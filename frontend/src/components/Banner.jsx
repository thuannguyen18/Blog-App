import { Link } from "react-router-dom";
import bannerImage from "assets/images/banner.jpg";

export default function Banner() {
    return (
        <div className="">
            <div
                className="bg-no-repeat bg-contain bg-center h-[288px] md:h-[388px] lg:h-[588px]"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="container mx-auto px-4 h-full relative">
                    <div className="absolute lg:grid lg:grid-cols-5 top-[15%] md:top-[20%]">
                        <div className="col-span-2">
                            <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-blue-600 to-sky-800 font-bold md:text-3xl lg:text-5xl ">Title of A Longer Featured Blog Post</h2>
                            <p className="text-sm text-slate-700 font-semibold mt-6 md:text-lg lg:text-xl">
                                Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                            </p>
                            <Link className="inline-block mt-4 w-30 px-4 py-2 text-center text-sky-600 border border-sky-600 rounded md:w-40 md:text-lg" to="/login">
                                Create Blog
                            </Link>
                        </div>
                        <div className="col-span-3"></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

