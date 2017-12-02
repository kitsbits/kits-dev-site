import React from "react";
import glamorous from "glamorous";

export default function Header(props) {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)",
        xsmall: "@media screen and (max-width: 700px)"
    }

    const Container = glamorous.div({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "auto",
        zIndex: "1",
        position: "relative",
        marginTop: "100px",
        // maxWidth: "50%",
        [mediaQueries.small]: {
            marginTop: "100px"
        }
    });

    const TextContainer = glamorous.div({
        marginLeft: "125px",
        [mediaQueries.xsmall]: {
            margin: "auto",
            padding: "25px",
        }
    });

    const LinksContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        width: "150px",
        margin: "25px 0px 25px 125px",
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
        borderBottom: "4px solid #FF4057",
        transition: "all 0.1s ease-in",
        ":hover": {
            color: "#FF4057"
        },
    });


    return (
        <Container>
            <LinksContainer>
                {props.goThere ? (
                <NavLink href={props.goThere} target="tab">
                    <i className="fa fa-2x fa-bullseye"></i>
                    {props.goText}
                </NavLink>
                ) : (
                    null
                )}
                {props.goThere ? (
                <NavLink href={props.seeCode} target="tab">
                    <i className="fa fa-2x fa-github"></i>
                    {props.seeText}
                </NavLink>
                ) : (
                    null
                )}
            </LinksContainer>
            <TextContainer>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </TextContainer>
        </Container>
    )
}
