import React from "react";

const Note = (props) => (
  <div className="note">
  {props.notes && <p>{props.count} . {props.notes}</p>}
      {props.notes && (
        <button
          className="button--link"
          onClick={(e) => {
            return props.handleRemove(props.notes);
          }}
        >
          remove
        </button>
      )}
  </div>
);

export default Note;
