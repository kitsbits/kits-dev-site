import React from "react";
import glamorous from "glamorous";

export default function Photo(props) {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Image = glamorous.img({
        position: "relative",
        width: "320px",
        marginTop: "35px",
        [mediaQueries.small]: {
            // width: "100%"
        }
    });

    return <Image src={props.url} alt="Screenshot of DBS Diary"/>;
}
