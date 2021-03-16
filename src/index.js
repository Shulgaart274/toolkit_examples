import React from "react";
import ReactDOM from "react-dom";
import "./fonts/HelveticaNeueCyr-Black.ttf";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import { rootReducer } from "./redux/reducer/combineReducer";
import { Provider } from "react-redux";
// import { createStore, compose } from "redux";
import store from "./redux/toolkitStore";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
