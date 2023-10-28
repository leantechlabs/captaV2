import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmenu = (submenuId) => {
    const submenu = document.querySelector(submenuId);
    if (submenu) {
      submenu.classList.toggle("show");
    }
  };

  return (
    <aside
      className={`sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-2 ${
        isSidebarOpen ? "show" : ""
      }`}
      id="sidenav-main"
    >
      <div className="sidenav-footer">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
          onClick={toggleSidebar}
        ></i>
        <Link to="/" className="navbar-brand m-0" target="_blank">
          <img
            src="/img/logo.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold"></span>
        </Link>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse w-auto"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"></h6>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link active">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#usersSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-single-02 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Users</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="usersSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/user/add" className="nav-link">
                    <span className="nav-link-text ms-3">Add Users</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/manage" className="nav-link">
                    <span className="nav-link-text ms-3">Manage Users</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#institutionSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-building text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Institution</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="institutionSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/college/add" className="nav-link">
                    <span className="nav-link-text ms-3">Add Institution</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/college/manage" className="nav-link">
                    <span className="nav-link-text ms-3">
                      Manage Institution
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#mouSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-paper-diploma text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">MOU</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="mouSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/mou/create" className="nav-link">
                    <span className="nav-link-text ms-3">MOU Create</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/mou/confirm" className="nav-link">
                    <span className="nav-link-text ms-3">MOU Confirmation</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/mou/manage" className="nav-link">
                    <span className="nav-link-text ms-3">MOU Manage</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#TrainingSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-hat-3 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Training Curriculum</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="TrainingSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/curriculum/create" className="nav-link">
                    <span className="nav-link-text ms-3">Create Curriculum</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/curriculum/manage" className="nav-link">
                    <span className="nav-link-text ms-3">Manage Curriculum</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/module/create" className="nav-link">
                    <span className="nav-link-text ms-3">Create Module</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/module/manage" className="nav-link">
                    <span className="nav-link-text ms-3">Manage Module</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#moduleSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-books text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Module Confirmation</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="moduleSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/module/confirmation/create" className="nav-link">
                    <span className="nav-link-text ms-3">
                      Module Confirmation Sheet
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/module/confirmation/manage" className="nav-link">
                    <span className="nav-link-text ms-3">
                      Manage Module Sheet
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/module/status" className="nav-link">
                    <span className="nav-link-text ms-3">
                      Verify Module Sheet
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#BatchSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-building text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Batch Management</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="BatchSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="batch/create" className="nav-link">
                    <span className="nav-link-text ms-3">Create Batch</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="batch/manage" className="nav-link">
                    <span className="nav-link-text ms-3">Manage Batch</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="batch/allocate" className="nav-link">
                    <span className="nav-link-text ms-3">Allocate Batch</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#SessionSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-ruler-pencil text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Session Management</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="SessionSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/session/details" className="nav-link">
                    <span className="nav-link-text ms-3">Session Details</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/session/attendance" className="nav-link">
                    <span className="nav-link-text ms-3">
                      Session Attendance
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="session/report" className="nav-link">
                    <span className="nav-link-text ms-3">Session Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#ReportSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-collection text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Report Management</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="ReportSubmenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/report/curriculum" className="nav-link">
                    <span className="nav-link-text ms-3">
                      Curriculum Report
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report/colleges" className="nav-link">
                    <span className="nav-link-text ms-3">Colleges Report</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report/module" className="nav-link">
                    <span className="nav-link-text ms-3">Module Report</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report/trainer" className="nav-link">
                    <span className="nav-link-text ms-3">Trainer Report</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report/session" className="nav-link">
                    <span className="nav-link-text ms-3">Session Report</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report/trainer-attendance" className="nav-link">
                    <span className="nav-link-text ms-3">Trainer Attendance Report</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report/financial" className="nav-link">
                    <span className="nav-link-text ms-3">Financial Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => toggleSubmenu("#SettingsSubmenu")}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-settings text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Settings</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="collapse" id="SettingsSubmenu">
              <ul className="navbar-nav">
               
                <li className="nav-item">
                  <Link to="/settings/system-set" className="nav-link">
                    <span className="nav-link-text ms-3">System Settings</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/settings/api" className="nav-link">
                    <span className="nav-link-text ms-3">Api Settings</span>
                  </Link>
                </li>
              
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mt-auto">
        <div className="card card-plain shadow-none" id="sidenavCard">
          <div className="card-body text-center p-3 w-100 pt-0">
            <Link
              to="/"
              target="_blank"
              className="btn btn-dark btn-sm w-100 mb-3"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`sidebar-collapse-button d-xl-none ${
          isSidebarOpen ? "collapsed" : ""
        }`}
        onClick={toggleSidebar}
      >
        <i className={`fas fa-caret-${isSidebarOpen ? "right" : "left"}`}></i>
      </div>
    </aside>
  );
};

export default Sidebar;