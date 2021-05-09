import React from "react";

export default class AddNotes extends React.Component {
  state = {
    error: undefined,
  };

  handleAddNotes = (e) => {
    e.preventDefault();
    const note = e.target.notes.value.trim();
    const error = this.props.handleAddNote(note);
    e.target.notes.value = "";
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddNotes}>
          Add Notes: <input type="text" name="notes"></input>
          <button>Add Notes</button>
        </form>
      </div>
    );
  }
}
