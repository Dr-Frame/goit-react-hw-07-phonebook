import React, { Component } from 'react';
import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Phonebook</h1>
        <Phonebook />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </React.Fragment>
    );
  }
}
export default App;
