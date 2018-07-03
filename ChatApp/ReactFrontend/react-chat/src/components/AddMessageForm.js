import React, { Component } from 'react';

class AddMessageForm extends Component {
  constructor() {
    super();

    this.state = {
      newMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      newMessage: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Need to handle sending the message to the Chat Room.
    this.setState({
      newMessage: ''
    });
    console.log(this.state.newMessage);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="add-message-form">
        <input
          onChange={this.handleChange}
          value={this.state.newMessage}
          placeholder="Say something to the room..."
          type="text" />
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default AddMessageForm;