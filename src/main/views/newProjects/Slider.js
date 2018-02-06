import React from "react";
import glamorous from "glamorous";
import { projects } from "./details";
import { Link } from "react-router-dom";

export default function Slider(props) {
    // STYLES \\
    const Container = glamorous.div({
        position: "absolute",
        zIndex: "5",
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
        top: props.top,
    });

    const carets = {
        color: "white",
    };

    const links = {
        textDecoration: "none",
        color: "white",
    }
    /////////////////////////////

    const end = projects.length - 1;
    const nextId = props.id + 1;
    const prevId = props.id - 1;
    const defaultTitle = projects[0].paramsTitle;

    return (
        <Container>
            <Link to={props.id < 1 ? `/projects/${end}/${projects[end].paramsTitle}` : `/projects/${prevId}/${projects[prevId].paramsTitle}`} style={links} onClick={props.scrollTop} >
                <i className="fa fa-5x fa-angle-left" style={carets}></i>
                <p>PREVIOUS</p>
            </Link>
            <Link to={props.id >= end ? `/projects/0/${defaultTitle}` : `/projects/${nextId}/${projects[nextId].paramsTitle}`} style={links} onClick={props.scrollTop}>
                <i className="fa fa-5x fa-angle-right" style={carets}></i>
                <p>NEXT</p>
            </Link>
        </Container>
    )
}
