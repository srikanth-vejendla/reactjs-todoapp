import React, { Component } from "react";
import "./Todoform.css";

class DisplayNotes extends Component {
  delete = key => {
    console.log("with in the delete method of DisplayNotes: " + key);
    this.props.deleteNote(key);
  };

  render() {
    return (
      <ul className="listNotes">
        {this.props.notes.map(note => {
          return (
            <li
              key={note.key}
              className="itemNote"
              onClick={() => this.delete(note.key)}
            >
              <b>{note.noteText}</b>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default DisplayNotes;
