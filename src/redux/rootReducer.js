import { combineReducers } from "redux";
import { likesRedcuer } from "./likeReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { errorReducer } from "./errorReducer";
// Главный редюсер

export const rootRedcuer = combineReducers({
  likesRedcuer: likesRedcuer,
  inputReducer: inputReducer,
  commentsReducer: commentsReducer,
  errorReducer: errorReducer,
});
