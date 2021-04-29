import React, { Component } from 'react';
/* import styles from './Contacts.css'; */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

class Contacts extends Component {
  state = {};

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts, deleteContact, isLoadingContacts } = this.props;
    return (
      <div>
        {isLoadingContacts && <h2>...loading</h2>}
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button type="button" onClick={() => deleteContact(id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
