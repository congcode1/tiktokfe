import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from './components/Global/Global';

ReactDOM.render(
  <React.StrictMode>
    <Global>
      <App />
    </Global>
  </React.StrictMode>,
  document.getElementById('root')
);
