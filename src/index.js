import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

import App from "./App";

const store = createStore(rootReducer);

ReactDOM.render( 
<Provider store={store}>
  <App />
</Provider>,
 document.getElementById('root')
);
