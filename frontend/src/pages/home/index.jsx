import React from "react";
import Banner from "components/Banner";
import Latest from "components/Latest";
import Recommend from "components/Recommend";
import Feed from "components/Feed";

export default function Home() {
    return (
        <React.Fragment>
            <Banner />
            <Latest />
            <Recommend />
            <Feed />
        </React.Fragment>
    );
}