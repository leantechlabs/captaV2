import React from 'react'
import Layout from './Layout'
import ScriptSection from './ScriptSection'
import './signin.css';

const Navbar = () => {
  return (
    <div>
    <Layout/>
    <nav className="custom-navbar navbar-expand-lg" id="navbarBlur" data-scroll="false">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb"></nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="custom-align-center">
            <div className="input-group">
              <span className="input-group-text text-body">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input type="text" className="form-control" placeholder="Type here..." />
            </div>
          </div>
          <ul className="custom-navbar-nav">
            <li className="custom-nav-item">
              <a href="javascript:;" className="nav-link text-white p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ScriptSection/>
    </div>
  )
}

export default Navbar


    
  

