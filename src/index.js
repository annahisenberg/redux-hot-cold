import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { hotColdReducer } from './reducers';

import Game from './components/game';

import './reset.css';
import './index.css';

const store = createStore(hotColdReducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
