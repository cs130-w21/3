import React from "react";

export default function Profile(props) {
    return (
        <div>
            <h1>Hi {props.email}</h1>
        </div>
    );
}