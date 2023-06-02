import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { rootRedcuer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk"; // для тестовых коментариев
import { compose, applyMiddleware } from "redux"; // для тестовых коментариев
const store = createStore(rootRedcuer);
// applyMiddleware(
// thunk
// ),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
