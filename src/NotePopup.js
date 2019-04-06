import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './NotePopup.css';

class NotePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      text: this.props.text
    };
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    const readOnly = this.props.editOn ? false : true;
    const editBtn = this.props.editOn ?
      <button className='save' onClick={() => this.props.save(this.state, this.props.index)}>Save</button>
      :
      <button className='edit' onClick={this.props.edit}>Edit</button>

    const textarea = this.props.editOn ?
      <textarea
        readOnly={readOnly}
        className={'text ' + this.props.editOn}
        defaultValue={this.state.text}
        onChange={e => this.updateText(e)}
      />
      :
      <ReactMarkdown className='text' source={this.state.text} />
      
    return (
      <div className='note-popup-wrapper'>
        <span className='close' onClick={this.props.close}>&times;</span>
        <div className='note-popup'>
          <div>
            <input
              readOnly={readOnly}
              className={'title ' + this.props.editOn}
              type="text"
              value={this.state.title}
              onChange={e => this.updateTitle(e)}
            />
            <span className='buttons'>
              {editBtn}
              <button className='delete' onClick={() => this.props.delete(this.props.index)}>Delete</button>
            </span>
          </div>
          {textarea}
        </div>
      </div>
    );
  }
}

export default NotePopup;
