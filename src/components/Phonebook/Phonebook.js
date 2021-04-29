import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

class Phonebook extends Component {
  state = { name: '', number: '' };

  contactCreateList = () => {
    const nameToCheck = this.state.name.toLowerCase();
    const { name, number } = this.state;
    const { addContact, contactBase } = this.props;
    let isExist = true;

    contactBase.map(({ name }) => {
      if (name.toLowerCase() === nameToCheck) {
        isExist = false;
        alert(`${name} is already added to your phonebook`);
      }
    });
    if (isExist) {
      addContact(name, number);
    }
  };

  contactAdd = event => {
    event.preventDefault();
    this.contactCreateList();
    this.resetForm();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const nameInputId = uuidv4();
    const phoneInputId = uuidv4();

    return (
      <div>
        <form onSubmit={this.contactAdd}>
          <label htmlFor={nameInputId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleInputChange}
              value={this.state.name}
              id={nameInputId}
            />
          </label>

          <label htmlFor="phoneInputId">
            number
            <input
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleInputChange}
              value={this.state.number}
              id={phoneInputId}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contactBase: contactsSelectors.getContactBase(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, value) =>
    dispatch(contactOperations.addContact(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
