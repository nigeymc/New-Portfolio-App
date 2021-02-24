import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter history={history} />
  </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));

