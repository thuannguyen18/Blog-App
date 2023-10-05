import { Link } from "react-router-dom";
import Container from "components/Container";
import bannerImage from "assets/images/banner.png";
import { token } from "constants";

export default function Banner() {
    if (token) {
        return (
            <Container styles={"mt-10"}>
                <div className="h-[400px] grid grid-rows-4 grid-flow-col gap-2">
                    <Link className="row-span-4 col-span-6 bg-sky-200 relative overflow-hidden">
                        <div className={`block bg-[url(http://localhost:3500/assets/po47.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.95]`}></div>
                        <h2 className="absolute top-[80%] text-lg text-white font-semibold px-3 text-center">Red Dead Redemption 2 Mod Restores Cut Dialogue Red Dead Redemption 2 Mod Restores Cut Dialogue  Dialogue Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                    </Link>
                    <div className="row-span-2 col-span-6 grid grid-cols-2 gap-2">
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po37.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po38.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                    </div>
                    <div className="row-span-2 col-span-6 grid grid-cols-2 gap-2">
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po39.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                        <Link className="relative overflow-hidden col-span-1">
                            <div className={`block bg-[url(http://localhost:3500/assets/po34.png)] bg-no-repeat bg-cover h-full transition duration-300 ease-in-out hover:scale-125 hover:brightness-[0.5] brightness-[0.9]`}></div>
                            <h2 className="absolute top-[75%] text-sm text-white font-semibold px-3">Red Dead Redemption 2 Mod Restores Cut Dialogue</h2>
                        </Link>
                    </div>
                </div>
            </Container>
        );
    }

    return (
        <div className="bg-blue-100 h-[288px] md:h-[388px] lg:h-[400] xl:h-[488px]">
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
    );
}

