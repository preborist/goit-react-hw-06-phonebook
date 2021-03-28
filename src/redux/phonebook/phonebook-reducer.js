import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import * as actionTypes from './phonebook-types';
import * as actions from './phonebook-actions';

// -------------до toolkit--------------
// const contactsReducer = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   { type, payload },
// ) => {
//   switch (type) {
//     case actionTypes.ADD_CONTACT:
//       return [...state, payload];
//     case actionTypes.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };
// -------------после toolkit------------

const contactsReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [actions.addNewContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
);

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
