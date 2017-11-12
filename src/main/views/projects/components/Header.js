import React from "react";
import glamorous from "glamorous";

export default function Header(props) {
    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-between"
    });

    const TextContainer = glamorous.div({

    });

    const LinksContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        width: "150px",
        marginTop: "25px"
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
        }
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
