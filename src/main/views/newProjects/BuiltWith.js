import React from "react";
import glamorous from "glamorous";
import BuiltWithFramework from "./BuiltWithFramework";

export default function BuiltWith(props) {
    return (
        <div>
            <h1>BUILT WITH</h1>
            {props.frameworks(["sketch", "react", "glamorous", "redux", "react-router", "mongodb", "express"])}
        </div>
    )
}
