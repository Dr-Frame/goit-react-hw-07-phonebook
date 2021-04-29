import { createSelector } from '@reduxjs/toolkit';
const getContactBase = state => state.contact.contacts;

const getFilterValue = state => state.contact.filter;

const getLoading = state => state.contact.loading;

const getVisibleContacts = createSelector(
  [getContactBase, getFilterValue],
  (contacList, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getContactBase,
  getFilterValue,
  getVisibleContacts,
  getLoading,
};
