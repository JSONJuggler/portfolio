import {
  OPEN_CONTACT,
  CLOSE_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACT,
} from "./types";

export const clearContactInfo = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CONTACT,
    });
  } catch (err) {
    //handle error here
  }
};

export const updateContactInfo = (contactData) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contactData,
    });
  } catch (err) {
    //handle error here
  }
};

export const openContact = () => (dispatch) => {
  try {
    dispatch({
      type: OPEN_CONTACT,
      payload: { contactOpen: true },
    });
  } catch (err) {
    //handle error here
  }
};

export const closeContact = () => (dispatch) => {
  try {
    dispatch({
      type: CLOSE_CONTACT,
      payload: { contactOpen: false },
    });
  } catch (err) {
    //handle error here
  }
};
