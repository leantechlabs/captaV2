import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  const handleProfile = () => {
    console.log('View Profile');
  };

  const handleNote = () => {
    console.log('Notifications');
  };
  const handleSignOut = () => {
    navigate('/')
  };


  return (
    <nav className=" " id="navbarBlur" data-scroll="true">
      <div className="container-fluid py-4 px-3">
        <div className="row justify-content-between">
          <div className="col-lg-8 col-md-4 col-sm-0">
            <div className="input-group d-none d-md-block">
              {/* <span className="input-group-text text-body">
                <i className="fas fa-search" aria-hidden="true"> </i>
                <input type="text" className="form-control" placeholder="  Type here..." />
              </span>
              */}
            </div>
            
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="d-flex justify-content-end align-items-center">
            <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                  <i class="fa fa-user"> </i> Profile{' '}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleNote}>Notifications</Dropdown.Item>
                    <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
