import './signIn.scss'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { loginUser } from '../../authAPI';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../selector';


function SignIn() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(loginUser(credentials));

    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };


  return ( 
    
    <>
    
      { isLoggedIn && <Navigate to="/user" /> }

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
        </section>
      </main>
      
    </>
  );
}

export default SignIn;