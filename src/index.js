import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Provider store={store}>
        <App />
      </Provider>
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
