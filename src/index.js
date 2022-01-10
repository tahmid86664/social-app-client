import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvide } from './context/AuthContext/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvide>
      <App />
    </AuthContextProvide>
  </React.StrictMode>,
  document.getElementById('root')
);
