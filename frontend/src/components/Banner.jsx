import { Link } from "react-router-dom";
import Container from "components/Container";
import bannerImage from "assets/images/banner.png";
import { token } from "constants";

export default function Banner() {
    return !token && <div className="bg-blue-100 h-[288px] md:h-[388px] lg:h-[400] xl:h-[488px]">
        <Container styles={"relative"}>
            <div className="absolute lg:grid lg:grid-cols-6">
                <div className="col-span-3 pt-10 md:pt-16">
                    <h1 className="text-3xl text-sky-700 font-bold md:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">Read the most interesting articles</h1>
                    <p className="text-sm text-slate-700 font-semibold my-4 md:text-lg xl:text-xl">
                        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                    </p>
                    <Link className="transition inline-block px-[50px] py-2 text-center text-slate-700 border border-slate-700 rounded-full md:text-lg hover:bg-blue-200" to="/login">
                        Create blog
                    </Link>
                </div>
                <div className="col-span-3">
                    <img className="object-contain hidden lg:block md:w-[542px] md:h-[242px] lg:w-[642px] lg:h-[342px] xl:w-[742px] xl:h-[472px]" src={bannerImage} alt="" />
                </div>
            </div>
        </Container>
    </div>

}

