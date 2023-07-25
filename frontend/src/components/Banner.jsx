import bannerImage from "../assets/images/banner.avif";

function Banner() {
    return (
        <div className="mt-12 shadow relative">
            <div
                className="bg-fixed bg-no-repeat bg-cover bg-center h-[50vh] brightness-[0.8]"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
            </div>
            <div className="absolute w-full inset-y-10 px-10 text-center">
                <h2 className="text-2xl md:text-5xl text-white leading-tight">Title of a longer featured blog post</h2>
                <p className="text-lg md:text-2xl text-white leading-tight mt-6">
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                </p>
            </div>
        </div>
    );
}

export default Banner;