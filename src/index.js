import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{ BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/dist/tailwind.min.css'

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
registerServiceWorker();
