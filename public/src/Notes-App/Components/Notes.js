import React from "react";
import Note from "./Note";

const Notes = (props) => (
  <div>
  <div className="widget__header">
  <h3>Here your Notes</h3>
    <button className="button--link" disabled={!props.notes.length > 0} onClick={props.handleRemoveAll}>
      Remove All
    </button>
    </div>
    {!props.notes.length>0 && <p className="widget__message">Enter your notes to get Started!!</p>}
    {props.notes.map((note,index) => (
      <Note notes={note} key={note} count={index+1} handleRemove={props.handleRemove} />
    ))}
  </div>
);

export default Notes;
