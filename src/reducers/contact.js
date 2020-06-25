import { OPEN_CONTACT, CLOSE_CONTACT } from "../actions/types";

const initialState = {
  contactOpen: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case OPEN_CONTACT:
      return { ...state, contactOpen: payload.contactOpen };
    case CLOSE_CONTACT:
      return { ...state, contactOpen: payload.contactOpen };
    default:
      return state;
  }
}
