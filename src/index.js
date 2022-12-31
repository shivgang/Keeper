
import React from "react";
import App from "./components/App";

// import ReactDom from "react-dom";
// ReactDom.render(<App />, document.getElementById("root"));   For React 17
        // OR
import {createRoot} from 'react-dom/client';
createRoot(document.getElementById('root')).render(<App/>); // For React 18
