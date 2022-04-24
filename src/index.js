import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Global from './components/Global/Global';
import store from './core/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Global>
        <App />
      </Global>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
