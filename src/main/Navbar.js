import React from "react";
import { Link } from "react-router-dom";
import glamorous from "glamorous";

export default function Navbar() {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Container = glamorous.div({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
        [mediaQueries.small]: {
            padding: "0",
            height: "335px"
        }
    });

    const HiContainer = glamorous.div({
        width: "300px",
        padding: "15px",
        fontSize: "1.35em",
        [mediaQueries.small]: {
            position: "absolute",
            top: "125px",
            width: "100%",
            textAlign: "center"
        }
    });

    const HiThere = glamorous.h1({
        margin: "0"
    });

    const ImKit = glamorous.h1({
        color: "#FF4057",
        margin: "0"
    });

    const CurrentPageContainer = glamorous.div({
        height: "250px",
        width: "250px",
        border: "4px solid #FF4057",
        transform: "translateY(65%)",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        color: "white",
        padding: "50px",
        [mediaQueries.small]: {
            width: "auto",
            height: "auto",
            border: "none",
            transform: "translateY(115%)",
            fontSize: "1.2em"
        }
    });

    const LinkContainer = glamorous.div({
        display: "flex",
        alignItems: "flex-end",
        width: "300px",
        justifyContent: "space-around",
        [mediaQueries.small]: {
            position: "absolute",
            width: "100%",
            top: "25px"
        }
    });

    const NavLink = glamorous.a({
        paddingBottom: "15px",
        borderBottom: "4px solid #FF4057",
        textDecoration: "none",
        margin: "0",
        color: "black",
        fontSize: "1.5em",
        fontWeight: "600",
        transition: "all 0.2s ease-in-out",
        ":hover": {
            color: "#FF4057"
        }
    });

    const NavPage = glamorous.span({
        transition: "all 0.1s ease-in",
        ":hover": {
            color: "#FF4057"
        }
    })

    const routeNavStyles = {
        paddingBottom: "15px",
        borderBottom: "4px solid #FF4057",
        textDecoration: "none",
        margin: "0",
        color: "black",
        fontSize: "1.5em",
        fontWeight: "600",
        transition: "hover 0.1s ease-in"
    }

    return (
        <Container>
            <HiContainer>
                <HiThere>Hi, there.</HiThere>
                <ImKit>I'm Kit and I'm a web developer</ImKit>
            </HiContainer>
            <CurrentPageContainer>
                <h1>RECENT PROJECTS</h1>
            </CurrentPageContainer>
            <LinkContainer>
                <Link to="/" style={routeNavStyles}><NavPage>RES<span style={{display: "block"}}>UME</span></NavPage></Link>
                <NavLink target="_tab" href="https://github.com/noblepaper"><i className="fa fa-2x fa-github"></i></NavLink>
                <NavLink target="_tab" href="https://www.linkedin.com/in/kitmasaracchia/"><i className="fa fa-2x fa-linkedin"></i></NavLink>
            </LinkContainer>
        </Container>
    )
}
