import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';

import Rule from './modules/form/ruleengine';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    {/*<FormContainer />*/}
    <Rule />
  </Provider>,
  document.getElementById('root')
);