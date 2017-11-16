import React from "react";
import glamorous from "glamorous";

export default function Photo(props) {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Container = glamorous.div({
        width: "100wh",
        display: "flex",
        justifyContent: "center"
    });

    const Image = glamorous.img({
        position: "relative",
        width: "50%",
        height: "100%",
        marginTop: "35px",
        [mediaQueries.small]: {
            width: "100%"
        }
    });

    return (
        <Container>
            <Image src={props.url} alt="Screenshot of DBS Diary"/>
        </Container>
    )
}
