import React from "react";

const Note = (props) => (
  <div>
    <p>
      {props.notes}
      {props.notes && (
        <button
          className="notes"
          onClick={(e) => {
            return props.handleRemove(props.notes);
          }}
        >
          remove
        </button>
      )}
    </p>
  </div>
);

export default Note;
