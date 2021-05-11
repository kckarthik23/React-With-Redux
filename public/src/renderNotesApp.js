import React from "react";
import ReactDOM from "react-dom";
import NotesApp from "./Notes-App/Components/Notes-App";
import "/Users/karc/VisualStudio/VSC/Sticky-Notes/node_modules/normalize-css/normalize.css"
import "./Notes-App/Styles/style.scss";

let root = document.getElementById("app");
ReactDOM.render(<NotesApp />, root);
