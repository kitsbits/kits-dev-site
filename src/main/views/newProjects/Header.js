import React from "react";
import glamorous from "glamorous";

export default function Header(props) {

    const height = 725;

    const Container = glamorous.div({
        background: `url(${props.picture}) no-repeat`,
        backgroundSize: "cover",
        width: "100%",
        height: `${height}px`,
        position: "relative",
    });


    const Polygon = glamorous.div({
        background: `url(${props.polygon}) no-repeat`,
        backgroundSize: "cover",
        width: "100vw",
        height: `385px`,
        position: "absolute",
        bottom: "0",
        zIndex: "2",
    })


    return (
        <Container>
            <Polygon />
        </Container>
    )
}
