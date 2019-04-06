import React, { Component } from 'react';
import Note from './Note';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'Titledsadsada',
          text: '# Text'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes.map((note, i) =>
      <Note
        title={note.title}
        text={note.text}
        key={i}
      />
    );

    return (
      <div className='App'>
        {notes}
      </div>
    );
  }
}

export default App;
