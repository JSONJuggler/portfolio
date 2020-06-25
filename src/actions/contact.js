import { OPEN_CONTACT, CLOSE_CONTACT } from "./types";

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
