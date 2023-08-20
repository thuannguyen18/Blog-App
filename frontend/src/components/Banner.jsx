import { Link } from "react-router-dom";
import Container from "components/Container";
import bannerImage from "assets/images/banner.png";

export default function Banner() {
    return (
        <div className="bg-blue-100 h-[288px] md:h-[388px] lg:h-[400] xl:h-[488px]">
            <Container styles={"relative"}>
                <div className="absolute lg:grid lg:grid-cols-6">
                    <div className="col-span-3 pt-14 md:pt-24">
                        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-700 to-blue-600 font-bold md:text-4xl lg:text-5xl">Title of A Longer Featured Blog Post</h1>
                        <p className="text-xs text-slate-700 font-semibold mt-6 mb-2 md:text-lg lg:text-xl">
                            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                        </p>
                        <Link className="text-sm inline-block mt-4 w-30 px-4 py-2 text-center text-slate-700 border border-slate-700 rounded-full md:w-48 md:text-lg hover:bg-gray-200" to="/login">
                            Create Blog
                        </Link>
                    </div>
                    <div className="col-span-3">
                        <img className="object-contain hidden lg:block md:w-[542px] md:h-[242px] lg:w-[642px] lg:h-[342px] xl:w-[742px] xl:h-[472px]" src={bannerImage} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

