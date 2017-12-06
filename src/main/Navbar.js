import React from "react";
import { Link } from "react-router-dom";
import glamorous from "glamorous";

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            scroll: false
        };
    }

    render() {
        ///// NAVBAR SCROLL FUNCTION \\\\\
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            const windowWidth = window.innerWidth;

            let navContainer = document.getElementById("nav-container");
            let hiContainer = document.getElementById("hi-container");
            let kit = document.getElementById("kit");
            let currentPageContainer = document.getElementById("current-page-container");
            let linkContainer = document.getElementById("link-container");

            if (scrollTop > 100 && windowWidth > 991) {
                // document.getElementById("nav-container").style.height = "150px";
                // document.getElementById("nav-container").style.overflow = "hidden";
                // document.getElementById("nav-container").style.borderBottom = "4px solid #FF4057";
                // document.getElementById("hi-container").style.transform = "translateY(-110%)";
                // document.getElementById("kit").style.opacity = "1";
                // document.getElementById("kit").style.display = "inherit";
                // document.getElementById("current-page-container").style.transform = "translateY(-5%)";
                // document.getElementById("current-page-container").style.color = "#FF4057";
                // document.getElementById("current-page-container").style.border = "4px solid transparent";

                this.setState({
                    scroll: true
                });

            }

            if (scrollTop < 100 && windowWidth > 991) {
                document.getElementById("nav-container").style.height = "200px";
                document.getElementById("nav-container").style.overflow = "visible";
                document.getElementById("nav-container").style.borderBottom = "none";
                document.getElementById("hi-container").style.transform = "translateY(0%)";
                document.getElementById("kit").style.opacity = "0.0";
                document.getElementById("kit").style.display = "hidden";
                document.getElementById("current-page-container").style.transform = "translateY(65%)";
                document.getElementById("current-page-container").style.color = "white";
                document.getElementById("current-page-container").style.border = "4px solid #FF4057";
                document.getElementById("current-page-container").style.height = "250px";
            }

            if (scrollTop > 175 && windowWidth < 991) {
                document.getElementById("link-container").style.height = "120px";
                document.getElementById("current-page-container").style.transform = "translateY(65%)";
                document.getElementById("current-page-container").style.position = "fixed";
                document.getElementById("current-page-container").style.top = "50px";
                document.getElementById("current-page-container").style.height = "100px";
                document.getElementById("hi-container").style.display = "none";

            }

            if (scrollTop < 189 && windowWidth < 991) {
                document.getElementById("link-container").style.height = "150px";
                document.getElementById("current-page-container").style.height = "200px";
                document.getElementById("current-page-container").style.position = "relative";
                document.getElementById("hi-container").style.display = "flex";
                document.getElementById("hi-container").style.flexDirection = "column";
            }
        });
        let navClass = ["nav-container"];
        if(this.state.addClass) {
            navClass.push("nav-container-scroll");
        }

        return (
            <div className={navClass} id="nav-container">
                <div className="hi-container" id="hi-container">
                    <h1 className="hi-there">Hi, there.</h1>
                    <h1 className="im-kit">I'm Kit and I'm a web developer</h1>
                </div>
                    <h1 className="kit" id="kit">Kit</h1>
                <div className="current-page-container" id="current-page-container">
                    <h1>{window.location.pathname === "/resume" ? "RESUME" : "RECENT PROJECTS"}</h1>
                </div>
                <div className="link-container" id="link-container">
                    {window.location.pathname === "/resume" ?
                    <Link to="/" className="route-nav"><span className="nav-page">PRO<span style={{display: "block"}}>JECTS</span></span></Link> :
                    <Link to="/resume" className="route-nav"><span className="nav-page">RES<span style={{display: "block"}}>UME</span></span></Link>
                    }
                    <a target="_tab" href="https://github.com/noblepaper"><i className="nav-link fa fa-3x fa-github"></i></a>
                    <a target="_tab" href="https://www.linkedin.com/in/kitmasaracchia/"><i className="nav-link fa fa-3x fa-linkedin"></i></a>
                </div>
            </div>
        )
    }
}
