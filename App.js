// const heading = React.createElement("h1", {id: 'heading'}, "Hello World from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", {},
        [
            React.createElement("h1", {}, "Hi i'm h1 tag"),
            React.createElement("h2", {}, "Hi i'm h2 tag")
        ]),
        React.createElement(
            "div", {},
            [
                React.createElement("h1", {}, "Hi i'm h1 tag"),
                React.createElement("h2", {}, "Hi i'm h2 tag")
            ]
        )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);