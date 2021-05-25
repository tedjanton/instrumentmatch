import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import configureStore from "./store";
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from "./store/session";
import { ModalProvider } from "./context/Modal";
import { SearchProvider } from "./context/Search";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <SearchProvider>
            <App />
          </SearchProvider>
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
