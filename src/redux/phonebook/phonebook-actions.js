import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import * as actionTypes from './phonebook-types';

// -------------до toolkit--------------
// export const addNewContact = (name, number) => {
//   return {
//     type: actionTypes.ADD_CONTACT,
//     payload: {
//       id: shortid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: actionTypes.DELETE_CONTACT,
//     payload: id,
//   };
// };

// export const changeFilter = payload => {
//   return {
//     type: actionTypes.FILTER_CONTACTS,
//     payload,
//   };
// };
// -------------после toolkit------------

export const addNewContact = createAction(
  'phonebook/AddNewContact',
  (name, number) => ({
    payload: {
      id: shortid(),
      name,
      number,
    },
  }),
);
export const deleteContact = createAction('phonebook/DeleteContact');
export const changeFilter = createAction('phonebook/ChangeContactsFilter');
