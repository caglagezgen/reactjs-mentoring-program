import React from 'react';
import ReactDOM from 'react-dom';
import App from '@app/components/app/app.component';
import 'src/index.css'; // TODO: import styles directly into index.html using webpack

ReactDOM.render(<App />, document.querySelector('#root'));
