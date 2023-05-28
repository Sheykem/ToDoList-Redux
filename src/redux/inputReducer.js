import { INPUT_TEXT } from "./types";

// Малый редюсер для компоненты

const initialState = {
  text: '',
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text
      };
    default: {
      return state;
    }
  }
};
