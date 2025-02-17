import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider  
    domain="dev-t875axpu0ht72s7d.us.auth0.com"
    clientId="7XuZcSsNlR0KLbYJLy8mi3sUMwvvP6QA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

