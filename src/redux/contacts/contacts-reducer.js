import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';

const contacts = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsError]: () => false,
  [actions.fetchContactsSuccess]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactError]: () => false,
  [actions.addContactSuccess]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactError]: () => false,
  [actions.deleteContactSuccess]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});

/* const contacts = (state = baseContacts, { type, payload }) => {
  switch (type) {
    case actionType.ADD:
      return [...state, payload];

    case actionType.DELETE:
      return [...state.filter(contact => contact.id !== payload)];

    default:
      return state;
  }
}; */

/* const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionType.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}; */

/* const baseContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]; */
