import React from "react";
import glamorous from "glamorous";

export default function BuiltWith(props) {
    const Logo = glamorous.img({
        width: "100px",
        height: "auto",
        margin: "25px",
    });

    return (
        <Logo src={props.framework.url} />
    )
}
