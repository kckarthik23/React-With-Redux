import React from "react";
import Note from "./Note";

const Notes = (props) => (
  <div>
    <button disabled={!props.notes.length > 0} onClick={props.handleRemoveAll}>
      Remove All
    </button>
    {props.notes.map((note) => (
      <Note notes={note} key={note} handleRemove={props.handleRemove} />
    ))}
  </div>
);

export default Notes;
