import React from "react";
import glamorous from "glamorous";
import { mediaQueries } from "../../styles/global";

export default function Header(props) {

    const height = 725;

    const Container = glamorous.div({
        background: `url(${props.picture}) no-repeat`,
        backgroundSize: "cover",
        width: "100%",
        height: `${height}px`,
        position: "relative",
    });


    const Polygon = glamorous.div({
        background: `url(${props.polygon}) no-repeat`,
        backgroundSize: "cover",
        width: "100vw",
        height: "450px",
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
            <Polygon>
                <TextContainer>
                    <LinkContainer>
                        <NavLink>
                            <i className="fa fa-2x fa-bullseye"></i>
                            go there
                        </NavLink>
                        <NavLink>
                            <i className="fa fa-2x fa-github"></i>
                            see code
                        </NavLink>
                    </LinkContainer>
                    <h1>Ponder Me And You</h1>
                    <p>Ecommerce site designed and built for a local digital artist</p>
                </TextContainer>
            </Polygon>
        </Container>
    )
}
