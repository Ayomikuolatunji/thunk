import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import store  from './store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </Provider>
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
