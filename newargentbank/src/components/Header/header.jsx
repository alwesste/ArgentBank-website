import './header.scss'
import argentBankLogo from '../../designs/img/argentBankLogo.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../reduxfeatures/userSlice';
import {selectIsLoggedIn, selectFirstName} from '../../selector'


function Header() {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const firstName = useSelector(selectFirstName)
  
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(clearUser())
  }

    return (
    
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      {isLoggedIn && 
      <Link className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {firstName}
      </Link>
}
      {isLoggedIn ? (
          <Link className="main-nav-item" onClick={handleLogout} to="/">
            <i className="fa fa-sign-out"></i> Sign Out
          </Link>
        ) : (
          <Link className="main-nav-item" to="/signIn">
            <i className="fa fa-sign-in"></i> Sign In
          </Link>
        )}
    </div>
  </nav>
  )
}

export default Header