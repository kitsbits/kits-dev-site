import React from "react";
import glamorous from "glamorous";

import Header from "./Header";
import Skills from "./Skills";
import Job from "./Job";

export default function Resume() {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Headline = glamorous.div({
        display: "flex",
        [mediaQueries.small]: {
            flexDirection: "column",
        }
    });

    const MyName = glamorous.h1({

    });

    const contactContainer = glamorous.div({
        display: "flex",
    });

    return (
        <div>
            <Header>

            </Header>
            <Skills></Skills>
            <Job></Job>
        </div>
    )
}
