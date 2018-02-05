import React from "react";
import glamorous from "glamorous";
import { misc } from "../../assets/assets";

export default function WebProject(props) {
    const Container =  glamorous.div({
        width: "687px",
        height: "505px",
        position: "relative",
        margin: "auto auto 70px auto",
        zIndex: "2",
    });

    const Backdrop = glamorous.div({
        background: `url(${misc.web}) no-repeat center`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        opacity: "0.5",
    });

    const ProjectPicture = glamorous.img({
        width: "625px",
        height: "auto",
        position: "absolute",
        top: "140px",
        left: "-26px",
    });

    return (
        <Container>
            <Backdrop />
            <ProjectPicture src={props.picture} />
        </Container>

    )
}
