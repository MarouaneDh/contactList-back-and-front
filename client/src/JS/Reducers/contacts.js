import {
  ADD_CONTACT,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_ALL_CONTACTS,
  GET_CONTACT,
} from "../Constants/ActionTypes";

const initialState = {
  contactList: [],
  loadContacts: false,
  errors: null,
  user: {},
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT:
      return { ...state, user: payload };
    case GET_ALL_CONTACTS:
      return {
        ...state,
        loadContacts: true,
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contactList: payload,
        loadContacts: false,
      };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        loadContacts: false,
        errors: payload,
      };
  }
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contactList: [...state.contactList, payload],
      };
    default:
      return state;
  }
};
