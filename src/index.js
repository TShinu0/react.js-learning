import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// imported browser rounting from react for page paths to work.
import { BrowserRouter } from 'react-router-dom';

// Rendering React - Document-Object-Mode from reactDOM package.
// using BrowserRouter because it's needed for exact url paths.
// Using App for the function in the App.js to work.
// root element is found in the ./public/index.html
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
     document.getElementById('root'));
