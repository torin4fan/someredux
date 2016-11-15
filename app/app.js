import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import router from './router';
require('es6-promise').polyfill();

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
