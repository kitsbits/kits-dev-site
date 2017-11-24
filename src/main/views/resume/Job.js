import React from "react";
import glamorous from "glamorous";

export default function Job() {
    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        width: "350px",
    });

    const LeftContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
    });

    const RightContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
    });


    return (
        <Container>
            <LeftContainer>

            </LeftContainer>
            <RightContainer>

            </RightContainer>
        </Container>
    )
}
