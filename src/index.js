import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css'


ReactDom.render(
    <App />,

    document.getElementById('root')
);
