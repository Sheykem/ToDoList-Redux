import { useDispatch } from "react-redux";
import { COMMENT_DELATE, INCREMENT } from "./types";
import { DECREMENT } from "./types";
import { INPUT_TEXT } from "./types";
import { COMMENT_CREATE } from "./types";
import { COMMENT_UPDATA } from "./types";
import { ERROR_DISPLAY_ON } from "./types";
import { ERROR_DISPLAY_OFF } from "./types";
// Экшены

export const incrementLikes = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementlikes = () => {
  return {
    type: DECREMENT,
  };
};
export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text,
  };
};
export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
};

export const commentUpadata = (text, id) => {
  return {
    type: COMMENT_UPDATA,
    data: { text, id },
  };
};

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELATE,
    id,
  };
};
