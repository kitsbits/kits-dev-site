import React from "react";
import glamorous from "glamorous";
import { misc } from "../../assets/assets";
import { mediaQueries } from "../../styles/global";

export default function WebProject(props) {
    const Container =  glamorous.div({
        position: "relative",
        zIndex: "2",
        margin: "auto auto 70px auto",
    });

    const Backdrop = glamorous.img({
        position: "relative",
        width: "50vw",
        opacity: "0.5",
        left: "50%",
        transform: "translateX(-50%)",
        [mediaQueries.small]: {
            width: "80vw",
        }
    });

    const ProjectPicture = glamorous.img({
        width: "50vw",
        position: "absolute",
        left: "45%",
        transform: "translateX(-50%)",
        top: "20%",
        [mediaQueries.small]: {
            width: "80vw",
        }
    });

    return (
        <Container>
            <Backdrop src={misc.web}/>
            <ProjectPicture src={props.picture} />
        </Container>

    )
}
