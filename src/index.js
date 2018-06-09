import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import registerServiceWorker from './util/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
