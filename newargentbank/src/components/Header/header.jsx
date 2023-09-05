import './header.scss'
import argentBankLogo from '../../designs/img/argentBankLogo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
    
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/accueil">
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <Link className="main-nav-item" to="/signIn">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
  )
}

export default Header