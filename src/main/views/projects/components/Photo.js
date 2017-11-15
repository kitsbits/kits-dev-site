import React from "react";
import glamorous from "glamorous";

export default function Photo(props) {
    const Container = glamorous.div({
        width: "100wh",
        display: "flex",
        justifyContent: "center"
    });

    const Image = glamorous.img({
        position: "relative",
        width: "100%",
        height: "100%",
        marginTop: "35px"
    });

    return (
        <Container>
            <Image src={props.url} alt="Screenshot of DBS Diary"/>
        </Container>
    )
}
