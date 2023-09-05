import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/accueil" element={ 'ceci est le texte de accueil' }></Route>
        <Route path="/sign-in" element={ 'ceci est le texte de sign in' }></Route>
        <Route path="/user" element={ 'ceci est le texte de user' }></Route>
      </Routes>
    </Router>
  );
};

const container =  document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
