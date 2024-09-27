//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter() {
    return (<p>Hello World</p>)
}

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter />);

