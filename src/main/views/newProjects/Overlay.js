import React from "react";
import glamorous from "glamorous";

export default function Overlay(props) {
    const ProjectOverlay = glamorous.div({
        width: "100vw",
        height: props.height,
        backgroundImage: "linear-gradient(-180deg, rgba(252,20,90,0.51) 0%, rgba(74,68,72,0.82) 39%)",
        position: "absolute",
        zIndex: "1",
        top: "0",
    });

    return (
        <ProjectOverlay />
    )
}
