import './signIn.scss'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importez useSelector depuis react-redux
import { loginUser } from '../../reduxfeatures/userSlice';
import { Navigate } from 'react-router-dom';

function SignIn() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatchez l'action loginUser avec les informations d'identification.
      await dispatch(loginUser(credentials));
      console.log('loginuser',loginUser)
    } catch (error) {
      // Gérez les erreurs de connexion ici.
      console.error('Erreur de connexion :', error);
    }
  };

  // Utilisez l'état de l'utilisateur pour vérifier la connexion.


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
        {/* Redirigez l'utilisateur vers "/user" après la connexion réussie. */}
        {isLoggedIn && <Navigate to="/user" />} {/* Utilisation de Navigate */}
      </section>
    </main>
  );
}

export default SignIn;