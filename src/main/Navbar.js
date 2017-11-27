import React from "react";
import { Link } from "react-router-dom";
import glamorous from "glamorous";

export default function Navbar(props) {
    ///// STYLING \\\\\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Container = glamorous.div({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "white",
        width: "100%",
        height: "200px",
        transition: "height 1s",
        zIndex: "2",
        [mediaQueries.small]: {
            padding: "0",
            height: "475px",
            position: "static",
        }
    });

    const HiContainer = glamorous.div({
        width: "300px",
        padding: "15px",
        fontSize: "1.35em",
        alignSelf: "flex-start",
        // diplay: "flex",
        [mediaQueries.small]: {
            position: "absolute",
            top: "155px",
            width: "100%",
            textAlign: "center"
        }
    });

    const MoveUp = glamorous.div({
        transition: "transform 1s"
    })

    const HiThere = glamorous.h1({
        margin: "0"
    });

    const ImKit = glamorous.h1({
        color: "#FF4057",
        margin: "0"
    });

    const Kit = glamorous.h1({
        color: "#FF4057",
        margin: "0",
        fontSize: "3em",
        opacity: "0.0",
        marginLeft: "35px",
        transition: "opacity 1.2s",
        position: "absolute",
        display: "hidden"
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
        transition: "all 1s",
        zIndex: "2",
        position: "relative",
        [mediaQueries.small]: {
            width: "auto",
            height: "auto",
            border: "none",
            transform: "translateY(130%)",
            fontSize: "1.2em",
            marginBottom: "55px",
            backgroundColor: "#FF4057",
            width: "100%",
            alignItems: "center",

        }
    });

    const LinkContainer = glamorous.div({
        display: "flex",
        alignItems: "flex-end",
        width: "300px",
        justifyContent: "space-around",
        transition: "all 0.2s ease-in-out",
        [mediaQueries.small]: {
            position: "fixed",
            width: "100%",
            height: "150px",
            paddingBottom: "25px",
            // alignItems: "center",
            top: "0",
            backgroundColor: "white",
            zIndex: "2"
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
            color: "#FF4057",
        }
    });

    const NavPage = glamorous.span({
        transition: "all 0.1s ease-in",
        ":hover": {
            color: "#FF4057",
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

    ///// NAVBAR SCROLL FUNCTION \\\\\
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowWidth = window.innerWidth;
        if (scrollTop > 100 && windowWidth > 991) {
            document.getElementById("nav-container").style.height = "150px";
            document.getElementById("nav-container").style.overflow = "hidden";

            document.getElementById("hi-container").style.transform = "translateY(-110%)";

            document.getElementById("kit").style.opacity = "1";
            document.getElementById("kit").style.display = "inherit";

            document.getElementById("current-page-container").style.transform = "translateY(-5%)";
            document.getElementById("current-page-container").style.color = "#FF4057";
            document.getElementById("current-page-container").style.border = "4px solid transparent";

        } else if (scrollTop < 100 && windowWidth > 991) {
            document.getElementById("nav-container").style.height = "200px";
            document.getElementById("nav-container").style.overflow = "visible";

            document.getElementById("hi-container").style.transform = "translateY(0%)";

            document.getElementById("kit").style.opacity = "0.0";
            document.getElementById("kit").style.display = "hidden";

            document.getElementById("current-page-container").style.transform = "translateY(65%)";
            document.getElementById("current-page-container").style.color = "white";
            document.getElementById("current-page-container").style.border = "4px solid #FF4057";
        } else if (scrollTop > 175 && windowWidth < 991) {
            document.getElementById("link-container").style.height = "120px";
            document.getElementById("current-page-container").style.transform = "translateY(65%)";
        }

        if (scrollTop > 189 && windowWidth < 991) {
            document.getElementById("current-page-container").style.position = "fixed";
            document.getElementById("current-page-container").style.top = "50px";
            document.getElementById("hi-container").style.display = "none";
            document.getElementById("current-page-container").style.height = "100px";

        } else if (scrollTop < 189 && windowWidth < 991) {
            document.getElementById("link-container").style.height = "150px";
            document.getElementById("current-page-container").style.transform = "translateY(110%)";
            document.getElementById("current-page-container").style.height = "200px";
            document.getElementById("current-page-container").style.position = "relative";
            document.getElementById("hi-container").style.display = "flex";
            document.getElementById("hi-container").style.flexDirection = "column";
        }
    });

    return (
        <Container id="nav-container">
            <HiContainer id="hi-container">
                <HiThere>Hi, there.</HiThere>
                <ImKit>I'm Kit and I'm a web developer</ImKit>
            </HiContainer>
            <Kit id="kit">Kit</Kit>
            <CurrentPageContainer id="current-page-container">
                <h1>{window.location.pathname === "/resume" ? "RESUME" : "RECENT PROJECTS"}</h1>
            </CurrentPageContainer>
            <LinkContainer id="link-container">
                {window.location.pathname === "/resume" ?
                <Link to="/" style={routeNavStyles}><NavPage>WEB<span style={{display: "block"}}>DEV</span></NavPage></Link> :
                <Link to="/resume" style={routeNavStyles}><NavPage>RES<span style={{display: "block"}}>UME</span></NavPage></Link>
                }
                <NavLink target="_tab" href="https://github.com/noblepaper"><i className="fa fa-2x fa-github"></i></NavLink>
                <NavLink target="_tab" href="https://www.linkedin.com/in/kitmasaracchia/"><i className="fa fa-2x fa-linkedin"></i></NavLink>
            </LinkContainer>
        </Container>
    )
}
