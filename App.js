


const heading = React.createElement("div",{}, React.createElement("div",{},
    [React.createElement("h1",{id:"this"},"This is Abhi"),React.createElement("h2",{id:"this"},"This is Abhi h2")]
        
    ));
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)