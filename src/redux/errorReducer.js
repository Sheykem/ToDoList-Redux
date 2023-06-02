import { ERROR_DISPLAY_ON } from "./types";
import { ERROR_DISPLAY_OFF } from "./types";

const initialState = {
  errorMessege: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_DISPLAY_ON:
      return {
        ...state,
        errorMessege: action.text,
      };
    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        errorMessege: null,
      };
    default: {
      return state;
    }
  }
};
