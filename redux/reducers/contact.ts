import { OPEN_CONTACT, CLOSE_CONTACT, UPDATE_CONTACT, CLEAR_CONTACT } from '../actions/types';

const initialState = {
  contactOpen: false,
  name: '',
  contact: '',
  message: '',
};

const contact = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_CONTACT:
      return { ...state, contactOpen: payload.contactOpen };
    case CLOSE_CONTACT:
      return { ...state, contactOpen: payload.contactOpen };
    case UPDATE_CONTACT:
      const { name, contact, message } = payload;
      return { ...state, name, contact, message };
    case CLEAR_CONTACT:
      return { ...state, name: '', contact: '', message: '' };
    default:
      return state;
  }
};

export default contact;
