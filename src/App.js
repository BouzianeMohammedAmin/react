const User = (props) => {
    return React.createElement(
        'div', {}, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.email),
            React.createElement("h3", {}, props.age),
        ]
    );

};


const App = () => {

    return React.createElement(
        "div", {}, [
            React.createElement('h1', {}, "pure rreact"),
            React.createElement(User, { name: "amine", age: 26, email: "amine@gmail.com" }),

        ]
    )
};

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));