import React from "react";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.onNameEventHandler = this.onNameEventHandler.bind(this);
    this.onTagEventHandler = this.onTagEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameEventHandler(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onTagEventHandler(e) {
    this.setState(() => {
      return { tag: e.target.value };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState(() => {
      return {
        name: "",
        tag: "",
      };
    });
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameEventHandler}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagEventHandler}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
