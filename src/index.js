import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css'

const domNode = document.getElementById('root');
const root = createRoot(domNode);


root.render(
    <App />,

);
