import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { reducers } from './components/reducers/index';

const store = createStore(reducers, applyMiddleware(thunk)); // will define reducers...

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// npm start
// http://localhost:3000/