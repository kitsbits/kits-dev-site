import React from "react";
import glamorous from "glamorous";

export default function Photo(props) {
    const Image = glamorous.img({
        width: "100%",
        height: "auto",
        marginTop: "35px"
    });

    return <Image src={props.url} alt="Screenshot of DBS Diary" />
}
