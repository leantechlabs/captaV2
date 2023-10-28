import React from 'react'
import Layout from '../Layout/Layout'
import ScriptSection from './ScriptSection'


const Navbar = () => {
  return (
    <div>
    <nav className=" navbar-expand-lg" id="navbarBlur" data-scroll="true">
      <div className="container-fluid py-4 px-3">
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
       
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar


    
  

