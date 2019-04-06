import React, { Component } from 'react';
import NotePopup from './NotePopup';
import arrow from './assets/icon-cheveron-down.svg';
import './Note.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNote: false,
      editMode: false
    };
    this.toggleNote = this.toggleNote.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleNote() {
    this.setState({
      showNote: !this.state.showNote
    });
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  shortenTitle(title) {
    return title.length > 5 ? title.substring(0, 5) + '...' : title;
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
          (
            this.state.editMode ?
              <NotePopup
                className='edit-on'
                title={this.props.title}
                text={this.props.text}
                close={this.toggleNote}
                edit={this.toggleEditMode}
              />
              :
              <NotePopup
                title={this.props.title}
                text={this.props.text}
                close={this.toggleNote}
                edit={this.toggleEditMode}
              />
          )
          : null
        }
      </div>
    );
  }
}

export default Note;
