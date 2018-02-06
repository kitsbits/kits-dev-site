import React from "react";
import glamorous from "glamorous";
import { mediaQueries } from "../../styles/global";
import { misc } from "../../assets/assets"

export default function Header(props) {

    const height = 700;

    const Container = glamorous.div({
        background: `url(${props.picture}) no-repeat`,
        backgroundSize: "cover",
        width: "100vw",
        height: `${height}px`,
        position: "relative",
    });

    const Overlay = glamorous.div({
        position: "absolute",
        backgroundColor: "rgba(252,20,90,0.51)",
        height: `${height}px`,
        width: "100vw",
        backgroundSize: "cover",
        zIndex: "1",
    });

    const Polygon = glamorous.div({
        background: `url(${misc.polygon}) no-repeat`,
        backgroundSize: "cover",
        width: "100vw",
        height: "420px",
        position: "absolute",
        bottom: "0",
        zIndex: "2",
    });

    const TextContainer = glamorous.div({
        margin: "125px auto auto 125px",
        [mediaQueries.xsmall]: {
            margin: "125px auto auto auto",
            width: "300px",
        }
    });

    const LinkContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        width: "150px",
        margin: "25px 0px 35px 155px",
        [mediaQueries.xsmall]: {
            margin: "0px auto 25px auto",
        }
    });

    const NavLink = glamorous.a({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "65px",
        textDecoration: "none",
        color: "black",
        paddingBottom: "2px",
        borderBottom: "3px solid #FF4057",
        transition: "all 0.1s ease-in",
        ":hover": {
            color: "#FF4057"
        },
    });

    return (
        <Container>
            <Overlay />
            <Polygon>
                <TextContainer>
                    <LinkContainer>
                        {props.project.visit ?
                            (<NavLink href={props.project.visit} target="blank">
                                <i className="fa fa-2x fa-bullseye"></i>
                                go there
                            </NavLink>)
                        :
                            null}
                        {props.project.code ?
                            (<NavLink href={props.project.code} target="blank">
                                <i className="fa fa-2x fa-github"></i>
                                see code
                            </NavLink>)
                        :
                            null}
                    </LinkContainer>
                    <h1>{props.project.title}</h1>
                    <p>{props.project.description}</p>
                </TextContainer>
            </Polygon>
        </Container>
    )
}
