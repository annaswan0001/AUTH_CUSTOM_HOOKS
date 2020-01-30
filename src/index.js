import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import {composeWithDevTools } from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'
import reducer from './redux/reducers'
import thunk from 'redux-thunk';

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk )))

// sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
