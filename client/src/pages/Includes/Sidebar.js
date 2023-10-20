import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [usersMenuOpen, setUsersMenuOpen] = useState(false);
  const [institutionMenuOpen, setInstitutionMenuOpen] = useState(false);
  const [moduleMenuOpen, setModuleMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleUsersMenu = () => {
    setUsersMenuOpen(!usersMenuOpen);
    setInstitutionMenuOpen(false);
    setModuleMenuOpen(false);
  };

  const toggleInstitutionMenu = () => {
    setInstitutionMenuOpen(!institutionMenuOpen);
    setUsersMenuOpen(false);
    setModuleMenuOpen(false);
  };

  const toggleModuleMenu = () => {
    setModuleMenuOpen(!moduleMenuOpen);
    setUsersMenuOpen(false);
    setInstitutionMenuOpen(false);
  };

  return (
    <aside
      className={`sidenav ${isSidebarOpen ? 'open' : 'closed'}`}
      style={{ width: '200px', minWidth: '250px', height: '650px', maxHeight: '750px' }}
    >
      <div className="sidenav-footer">
        <i
          className="close-button"
          onClick={toggleSidebar}
        ></i>
        <a className="navbar-brand m-0" target="_blank">
          <img
            src="/img/logo.png"
            alt="main_logo"
            style={{ width: '100%', height: 'auto', maxHeight: '250px', maxWidth: '250px' }}
          />
          <span className="ms-1 font-weight-bold"></span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          <li className="nav-item mt-3">
            <h6
              href="/"
              className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              Dashboard
            </h6>
          </li>
          
          <li className="nav-item">
            <a
              className={`nav-link ${usersMenuOpen ? 'active' : ''}`}
              onClick={toggleUsersMenu}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-single-02 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Users</span>
              <i
                className={`fas ${usersMenuOpen ? 'fa-caret-up' : 'fa-caret-down'} ms-auto`}
                aria-hidden="true"
              ></i>
            </a>
            {usersMenuOpen && (
              <ul className="navbar-nav submenu">
                <li className="nav-item">
                  <a className="nav-link" href="/manage/add-user" style={{ cursor: 'pointer' }}> {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">Add Users</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manage/manage-users" style={{ cursor: 'pointer' }}>  {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">Manage Users</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${institutionMenuOpen ? 'active' : ''}`}
              onClick={toggleInstitutionMenu}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-building text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Institution</span>
              <i
                className={`fas ${institutionMenuOpen ? 'fa-caret-up' : 'fa-caret-down'} ms-auto`}
                aria-hidden="true"
              ></i>
            </a>
            {institutionMenuOpen && (
              <ul className="navbar-nav submenu">
                <li className="nav-item">
                  <a className="nav-link" href="/manage/add-institution" style={{ cursor: 'pointer' }}>   {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">Add Institution</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manage/manage-institution" style={{ cursor: 'pointer' }}>   {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">Manage Institution</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${moduleMenuOpen ? 'active' : ''}`}
              onClick={toggleModuleMenu}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-archive-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Module</span>
              <i
                className={`fas ${moduleMenuOpen ? 'fa-caret-up' : 'fa-caret-down'} ms-auto`}
                aria-hidden="true"
              ></i>
            </a>
            {moduleMenuOpen && (
              <ul className="navbar-nav submenu">
                <li className="nav-item">
                  <a className="nav-link" href="/manage/add-curriculum" style={{ cursor: 'pointer' }}>   {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">Add Curriculum</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manage/add-module" style={{ cursor: 'pointer' }}>   {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">Add Module</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manage/module-confirmation-sheet" style={{ cursor: 'pointer' }}>   {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">Module Confirmation Sheet</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/trainer/day-work" style={{ cursor: 'pointer' }}>   {/* Add the link for  respective pages*/} 
                    <span className="nav-link-text ms-3">DSTS</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mt-auto">
        <div className="card card-plain shadow-none" id="sidenavCard">
          <div className="card-body text-center p-3 w-100 pt-0">
            <a href="/" target="_blank" className="btn btn-dark btn-sm w-100 mb-3" style={{ cursor: 'pointer' }}>
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
