import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'storeon/react';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '@app/store/store';
import App from '@app/components/app/app.component';
import 'src/index.css'; // TODO: import styles directly into index.html using webpack

ReactDOM.render(
  <Router>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.querySelector('#root'),
);
