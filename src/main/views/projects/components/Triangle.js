import React from "react";
import glamorous from "glamorous";

export default function Triangle(props) {
    const Triangle = glamorous.div({
        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: props.borderWidth,
        borderColor: "transparent transparent white transparent",
        overflow: "hidden",
        position: "absolute",
        transform: "translateX(-50%)",
    });

    return <Triangle></Triangle>;
}
