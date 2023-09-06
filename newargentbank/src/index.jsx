import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Accueil from './pages/Accueil/accueil';
import User from './pages/User/user';
import SignIn from './pages/SignIn/signIn';
import Layout from './components/Layout/layout';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={ <Accueil /> } />
          <Route path="/user" element={ <User /> } />
          <Route path="/signIn" element={ <SignIn /> } />
        </Routes>
      </Layout>
    </Router>
  );
};

const container =  document.getElementById('root')
const root = createRoot(container)
root.render (<App />)