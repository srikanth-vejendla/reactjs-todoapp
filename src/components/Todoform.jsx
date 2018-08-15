import React, { Component } from "react";
import "./Todoform.css";
import DisplayNotes from "./DisplayNotes";

class TodoForm extends Component {
  state = {
    notes: []
  };

  addNote = e => {
    if (this.refs.noteTextRef.value !== "") {
      var newNote = {
        noteText: this.refs.noteTextRef.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          notes: prevState.notes.concat(newNote)
        };
      });
    }
    this.refs.noteTextRef.value = "";

    e.preventDefault();
  };

  deleteNote = key => {
    var filteredNotes = this.state.notes.filter(note => {
      return note.key !== key;
    });
    this.setState({
      notes: filteredNotes
    });
  };

  render() {
    return (
      <div className="todoFormMain">
        <form className="todoFormForm" onSubmit={this.addNote}>
          <input
            className="taskInput"
            placeholder="Enter your task..."
            ref="noteTextRef"
          />
          <button className="taskButton" type="submit">
            Add
          </button>
        </form>
        <DisplayNotes notes={this.state.notes} deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default TodoForm;
