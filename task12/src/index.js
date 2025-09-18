import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';   // ✅ Import Provider
import { store } from './store';          // ✅ Import store
import 'bootstrap/dist/css/bootstrap.min.css';  // ✅ Bootstrap import here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>     {/* ✅ Wrap App inside Provider */}
    <App />
  </Provider>
);
