import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmenu = (submenuId) => {
    const submenu = document.querySelector(submenuId);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  };

  return (
    <aside
      className={`sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-2 ${isSidebarOpen ? 'show' : ''}`}
      id="sidenav-main"
    >
      <div className="sidenav-footer">
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" onClick={toggleSidebar}></i>
        <a className="navbar-brand m-0" target="_blank">
          <img src="/img/logo.png" className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold"></span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          <li className="nav-item mt-3">
            <h6 href="/" className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"></h6>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/dashboard">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => toggleSubmenu('#usersSubmenu')} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="usersSubmenu" id="usersToggle">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-single-02 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Users</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </a>
            <div className="collapse" id="usersSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/manage/add-user">
                    <span className="nav-link-text ms-3">Add Users</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manage/manage-users">
                    <span className="nav-link-text ms-3">Manage Users</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => toggleSubmenu('#institutionSubmenu')} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="institutionSubmenu" id="institutionToggle">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-building text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Institution</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </a>
            <div className="collapse" id="institutionSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/manage/add-institution">
                    <span className="nav-link-text ms-3">Add Institution</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manage/manage-institution">
                    <span className="nav-link-text ms-3">Manage Institution</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          
        </ul>
      </div>
      <div className="sidenav-footer mt-auto">
        <div className="card card-plain shadow-none" id="sidenavCard">
          <div className="card-body text-center p-3 w-100 pt-0">
            <a href="/" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Sign Out</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
