import React, { Component } from "react";
import "../styles/Contact.css";
class Contact extends Component {
  state = {
    username: "",
    email: "",
    note: "",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <section className="section_page contact_section ">
          <h2 className="contact contact_title contact titile_primary">
            Zainteresowany współpracą ??
          </h2>
          <h3>Napisz do nas</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">
              Twoje imię
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              ></input>
            </label>
            <label htmlFor="email">
              Adres email do kontaktu
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
            </label>
            <label htmlFor="note">
              Wiadomość dla nas
              <input
                type="textarea"
                id="note"
                name="note"
                size="40"
                value={this.state.note}
                onChange={this.handleChange}
              ></input>
            </label>
            <button>Wyślij</button>
          </form>
        </section>
      </>
    );
  }
}
export default Contact;
