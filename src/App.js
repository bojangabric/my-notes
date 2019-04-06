import React, { Component } from 'react';
import Note from './Note';
import './App.css';
import NotePopup from './NotePopup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: false,
      editMode: false,
      notes: JSON.parse(localStorage.getItem('notes')) || []
    };
    this.newNote = this.newNote.bind(this);
    this.toggleNewNote = this.toggleNewNote.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  newNote() {
    this.setState({
      newNote: true,
      editMode: true
    })
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  toggleNewNote() {
    this.setState({
      newNote: !this.state.newNote,
      editMode: false
    });
  }

  saveNote(note, index = -1) {
    if (index === -1) {
      this.setState({
        notes: [...this.state.notes, note],
        newNote: false
      }, () => (localStorage.setItem('notes', JSON.stringify(this.state.notes))));
    } else {
      let n = [...this.state.notes];
      n[index] = note;
      this.setState({
        notes: n,
        newNote: false
      }, () => (localStorage.setItem('notes', JSON.stringify(this.state.notes))));
    }
  }

  deleteNote(index) {
    let n = [...this.state.notes];
    n.splice(index, 1);
    this.setState({
      notes: n
    }, () => (localStorage.setItem('notes', JSON.stringify(this.state.notes))));
  }

  render() {
    const editOn = this.state.editMode ? 'edit-on' : '';

    const notes = this.state.notes.map((note, i) =>
      <Note
        editOn={editOn}
        title={note.title}
        text={note.text}
        save={this.saveNote}
        edit={this.toggleEditMode}
        delete={this.deleteNote}
        index={i}
        key={i}
      />
    );

    let newnote = null;
    if (this.state.newNote) {
      newnote = <NotePopup
        editOn={editOn}
        title='Placeholder'
        text='Placeholder'
        save={this.saveNote}
        edit={this.toggleEditMode}
        delete={this.toggleNewNote}
        close={this.toggleNewNote}
      />
    }

    return (
      <div className='App'>
        <button className='new-note' onClick={this.newNote}>New note</button>
        {newnote}
        {notes}
      </div>
    );
  }
}

export default App;
