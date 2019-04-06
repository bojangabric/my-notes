import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './NotePopup.css';

class NotePopup extends Component {
  render() {
    return (
      <div className='note-popup-wrapper'>
        <span className='close' onClick={this.props.close}>&times;</span>
        <div className={'note-popup ' + this.props.className}>
          <div className='title'>
            {this.props.title}
            <span className='buttons'>
              <button className='edit' onClick={this.props.edit}>Edit</button>
              <button className='delete'>Delete</button>
            </span>
          </div>
          <ReactMarkdown className='text' source={this.props.text} />
        </div>
      </div>
    );
  }
}

export default NotePopup;
