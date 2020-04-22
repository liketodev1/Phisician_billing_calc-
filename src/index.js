import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Store/rootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
  <React.StrictMode>
    <Provider store={ store }>
      <App/>
    </Provider>
  </React.StrictMode>
);

render(app, document.getElementById('root'));


