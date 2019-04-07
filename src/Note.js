import React, { Component } from 'react';
import NotePopup from './NotePopup';
import arrow from './assets/icon-cheveron-down.svg';
import './Note.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNote: false
    };
    this.toggleNote = this.toggleNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  shortenTitle(title) {
    return title.length > 10 ? title.substring(0, 5) + '...' : title;
  }

  toggleNote() {
    if (this.props.editOn === 'edit-on')
      this.props.edit();

    this.setState({
      showNote: !this.state.showNote
    })
  }

  saveNote(state, index) {
    this.props.save(state, index);
    this.setState({
      showNote: false
    })
  }

  deleteNote(index) {
    this.props.delete(index);
    this.setState({
      showNote: !this.state.showNote
    })
  }

  render() {
    return (
      <div className='note-wrapper'>
        <div className='note' onClick={this.toggleNote}>
          <div className='title'>
            {this.shortenTitle(this.props.title)}
          </div>
          <div className='arrow'>
            <img src={arrow} alt='arrow.svg' />
          </div>
        </div>
        {this.state.showNote ?
          <NotePopup
            editOn={this.props.editOn}
            title={this.props.title}
            text={this.props.text}
            save={this.saveNote}
            edit={this.props.edit}
            delete={this.deleteNote}
            close={this.toggleNote}
            index={this.props.index}
          />
          : null
        }
      </div>
    );
  }
}

export default Note;
