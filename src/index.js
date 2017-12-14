import React from 'react';
import ReactDOM from 'react-dom';
import './Utils/index.css';
import App from './Components/App';
import registerServiceWorker from './Utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
