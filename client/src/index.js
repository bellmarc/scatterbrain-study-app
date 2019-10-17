import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.js';
import UserSessionProvider from './Providers/UserSession/UserSession';


ReactDOM.render(
    <UserSessionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserSessionProvider>,
    document.getElementById('root')
)