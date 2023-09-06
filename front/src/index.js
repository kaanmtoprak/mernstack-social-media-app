import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/styles.scss';
import './components/components.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>

);


