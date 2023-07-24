import React from 'react'
import {
  Link, useLocation
} from 'react-router-dom';

const NavBar = (props) => {
  const { setCountry } = props
  const currentLocation = useLocation()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${currentLocation.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentLocation.pathname === '/business' ? 'active' : ''}`} to="/business">Business </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentLocation.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentLocation.pathname === '/health' ? 'active' : ''}`} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentLocation.pathname === '/sciences' ? 'active' : ''}`} to="/sciences">Sciences</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentLocation.pathname === '/sports' ? 'active' : ''}`} to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${currentLocation.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
              </li>
              
            </ul>
              
          </div>
        </div>
      </nav>
    </div>
  )

}

export default NavBar