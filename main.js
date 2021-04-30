import React from "react";

import React from "react-dom";

ReactDOM.render(
    React.createElement(
        "a",
        {
            className: "test",
            id: "test",
            rel: "test",
            type: "test/react",
            href: "www.google.com"
        },
        // content
        "A link to google"
    ),
    document.getElementById("root")
)

let link = React.createElement(
    "a",
    {
        className: "test",
        id: "test",
        rel: "test",
        type: "test/react",
        href: "www.google.com"
    },
    // content
    "A link to google"
);

ReactDOM.render(
    link,
    document.getElementById("root")
)

React.createElement(
    "h2",
    null,
    "testing"
)

React.createElement(
    "div",
    {
        className: "container"
    },
    null
)

React.createElement(
    "h1",
    null,
    "This is the header"
)

React.createElement(
    "p",
    {
        className: "main"
    },
    "Lorem Ipsum"
)

React.createElement(
    "a",
    {
        href: "this.com"
    },
    null
)

React.createElement(
    "nav",
    {
        className: "main"
    },
    React.createElement(
        "input",
        {
            type: "text",
            id: "search"
        },
        null
    )
)

React.render(
    React.createElement(
        "h2",
        null,
        "Hello world"
    ),
    document.getElementById("root")
)

