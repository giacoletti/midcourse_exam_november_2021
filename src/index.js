import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import './index.css';
import configureStore from './state/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"));
