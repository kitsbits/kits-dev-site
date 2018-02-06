import React from "react";
import glamorous from "glamorous";
import { misc } from "../../assets/assets";

export default function MobileProject(props) {
    const Container =  glamorous.div({
        display: "flex",
        width: "242px",
        height: "505px",
        position: "relative",
        margin: "auto auto 70px auto",
        zIndex: "2",
    });

    const Backdrop = glamorous.div({
        background: `url(${misc.mobileWhite}) no-repeat center`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        opacity: "0.5",
    });

    const ProjectPicture = glamorous.img({
        width: "229px",
        height: "auto",
        position: "absolute",
        top: "40px",
        left: "6px",
    });

    return (
        <Container>
            <Backdrop />
                <ProjectPicture src={props.picture} />
        </Container>
    )
}
