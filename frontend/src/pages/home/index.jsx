import React from "react";
import Banner from "components/Banner";
import LatestBlogs from "components/LatestBlogs";
import RecommendBlogs from "components/RecommendBlogs";
import Feeds from "components/Feeds";

export default function Home() {
    return (
        <React.Fragment>
            <Banner />
            <LatestBlogs />
            <RecommendBlogs />
            <Feeds />
        </React.Fragment>
    );
}