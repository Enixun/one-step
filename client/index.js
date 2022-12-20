import { createReadStream } from 'fs';
import React from 'react';
import { render, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx';

import helpMe from './helpMe';
import './styles/main.scss';

helpMe();
// ReactDOM.render(<App />, document.getElementById(root));
const domNode = document.getElementById('root');
const root = createRoot(domNode);

// render(<App />, domNode);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);