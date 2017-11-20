import React from "react";
import glamorous from "glamorous";

export default function Header(props) {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)",
        xsmall: "@media screen and (max-width: 700px)"
    }

    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: "auto",
        maxWidth: "50%",
        minWidth: "320px",
        backgroundColor: "white",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 3px inset",
        padding: "25px 55px",
        height: "350px",
        [mediaQueries.small]: {
            // marginTop: "200px"
        }
    });

    const TextContainer = glamorous.div({

    });

    const LinksContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        width: "150px",
        marginTop: "25px",
        marginLeft: "25px",
        [mediaQueries.xsmall]: {
            flexDirection: "column",
            marginTop: "0",
            // marginLeft: "55px",
            // width: "65px"
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
            <TextContainer>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </TextContainer>
            <LinksContainer>
                <NavLink href={props.goThere}>
                    <i className="fa fa-2x fa-bullseye"></i>
                    {props.goText}
                </NavLink>
                <NavLink href={props.seeCode}>
                    <i className="fa fa-2x fa-github"></i>
                    {props.seeText}
                </NavLink>
            </LinksContainer>
        </Container>
    )
}
