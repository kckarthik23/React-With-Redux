import React from "react";
import Header from "./Header";
import { Action } from "./Action";
import Notes from "./Notes";
import AddNotes from "./AddNotes";
import ReactModal from "./ReactModal";

export default class NotesApp extends React.Component {
  title = "Notes App";
  subtitle = "Notes are important";

  state = {
    notes: this.props.notes,
    selectedNote: undefined
  };
  handleRemoveAll = () => {
    this.setState(() => {
      return {
        notes: [],
      };
    });
  };

  handlePick = () => {
    const note = this.state.notes[
      Math.floor(Math.random() * this.state.notes.length)
    ];
    this.setState(() => ({ selectedNote: note }));
  };
  handleModal = () => {
    this.setState(() => ({ selectedNote: undefined }));
  };
  handleAddNote = (note) => {
    if (this.state.notes.indexOf(note) > -1) return "Note already exists!";
    else if (note.trim() == "") return "Enter a valid note!";

    this.setState((prevState) => ({ notes: prevState.notes.concat(note) }));
  };
  handleRemove = (NoteToremove) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note !== NoteToremove),
      };
    });
  };
  componentDidMount() {
    try {
      const notes = JSON.parse(localStorage.getItem("notes"));
      if (notes) {
        this.setState(() => ({ notes }));
      }
    } catch (exception) {
      console.log("exception");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes.length != this.state.notes.length) {
      console.log("componentdidupdate" + prevProps);
      const notes = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", notes);
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Action notes={this.state.notes} handlePick={this.handlePick} />
        <Notes
          notes={this.state.notes}
          handleRemoveAll={this.handleRemoveAll}
          handleRemove={this.handleRemove}
        />
        <AddNotes handleAddNote={this.handleAddNote} />
        <ReactModal
          selectedNote={this.state.selectedNote}
          handleModal={this.handleModal}
        />
      </div>
    );
  }
}
NotesApp.defaultProps = {
  notes: [],
};
